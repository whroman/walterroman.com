//
//  main.js
//
//  A project template for using arbor.js
//
(function($){

  var Renderer = function(canvas){
    var dom = $(canvas)
    var canvas = dom.get(0)
    var ctx = canvas.getContext("2d");
    var gfx = arbor.Graphics(canvas)
    var particleSystem
    var _vignette = null;

    var that = {
      init:function(system){
        
        sys = system
        //
        // the particle system will call the init function once, right before the
        // first frame is to be drawn. it's a good place to set up the canvas and
        // to pass the canvas size to the particle system
        //
        // save a reference to the particle system for use in the .redraw() loop
        particleSystem = system

        // inform the system of the screen dimensions so it can map coords for us.
        // if the canvas is ever resized, screenSize should be called again with
        // the new dimensions
        sys.screen({
          size:{width:dom.width(), height:dom.height()},
          padding:[230,95,95,95],
          step: 0.04
        }) // have the ‘camera’ zoom somewhat slowly as the graph unfolds 

        $(window).resize(that.resize) 
        that.resize()

        // set up some event handlers to allow for node-dragging
        that.initMouseHandling()
      },

      _drawVignette:function(){
        var w = canvas.width
        var h = canvas.height
        var r = 50

        if (!_vignette){
          var top = ctx.createLinearGradient(0,0,0,r)
          top.addColorStop(0, "white")
          top.addColorStop(1, "rgba(255,255,255,0)")

          var bot = ctx.createLinearGradient(0,h-r,0,h)
          bot.addColorStop(0, "rgba(255,255,255,0)")
          bot.addColorStop(1, "white")

          _vignette = {top:top, bot:bot}
        }
        
        // top
        ctx.fillStyle = _vignette.top
        ctx.fillRect(0,0, w,r)

        // bot
        ctx.fillStyle = _vignette.bot
        ctx.fillRect(0,h-r, w,r)

      },
      
      redraw:function(){
        // 
        // redraw will be called repeatedly during the run whenever the node positions
        // change. the new positions for the nodes can be accessed by looking at the
        // .p attribute of a given node. however the p.x & p.y values are in the coordinates
        // of the particle system rather than the screen. you can either map them to
        // the screen yourself, or use the convenience iterators .eachNode (and .eachEdge)
        // which allow you to step through the actual node objects but also pass an
        // x,y point in the screen's coordinate system
        // 
        ctx.fillStyle = "white"
        ctx.fillRect(0,0, canvas.width, canvas.height)
        
        particleSystem.eachEdge(function(edge, pt1, pt2){
          // edge: {source:Node, target:Node, length:#, data:{}}
          // pt1:  {x:#, y:#}  source position in screen coords
          // pt2:  {x:#, y:#}  target position in screen coords

          // draw a line from pt1 to pt2

      // branch:"#42412d",
      // code:"#BB6500",
      // doc:"#961800",
      // demo:"#002B60"

        // Makes gravity strings invisible between objects not related by content
          if (
            (edge.source.data.color == "#42412d" && edge.target.data.color == "#42412d") || 
            (edge.source.data.color == "#BB6500" && edge.target.data.color == "#BB6500") ||
            (edge.source.data.color == "#961800" && edge.target.data.color == "#961800") ||
            (edge.source.data.color == "#002B60" && edge.target.data.color == "#002B60") ||            
            (edge.source.data.color != "#42412d" && edge.target.data.color == "#42412d")) 
          {
            ctx.strokeStyle = "rgba(0,0,0,0)"
          } else if (edge.source.data.color == "#961800" && edge.target.data.color == "#002B60") {
            ctx.strokeStyle = "rgba(0,0,100,0.2)"
            ctx.lineWidth = 2
          } else if (edge.source.data.color == "#961800" && edge.target.data.color == "#BB6500") {
            ctx.strokeStyle = "rgba(250,150,0,0.2)"
            ctx.lineWidth = 2
          } else if (edge.source.name=="languages" || edge.source.name=="frames / libs" || edge.source.name=="portfolio") {
            ctx.strokeStyle = "rgba(0,0,0,0.7)"
            ctx.lineWidth = 2.5
          } else {
            ctx.strokeStyle = "rgba(0,0,0,0)"
          }

        // // If not highlighted node
        // if(edge.target.data.alpha != 1) {
        //   if (edge.source.data.color == "#961800" && edge.target.data.color == "#002B60") {
        //     ctx.strokeStyle = "rgba(0,0,100,0.8)"
        //   } else if (edge.source.data.color == "#961800" && edge.target.data.color == "#BB6500") {
        //     ctx.strokeStyle = "rgba(250,150,0,0.8)"
        //   } else if (edge.source.data.color == "#002B60" && edge.target.data.color == "#BB6500") {
        //     ctx.strokeStyle = "rgba(0,150,0,0.8)"
        //   }        

        // }

        // if(edge.target.data.alpha > 0.8) {
        //   if (edge.source.data.color != "#42412d") {
        //     ctx.strokeStyle = "rgba(0,0,0,0.2)"
        //   }
        // }

          ctx.beginPath()
          ctx.moveTo(pt1.x, pt1.y)
          ctx.lineTo(pt2.x, pt2.y)
          ctx.stroke()
        })

        particleSystem.eachNode(function(node, pt){
          var w = Math.max(20, 50+gfx.textWidth(node.name) )
          // node: {mass:#, p:{x,y}, name:"", data:{}}
          // pt:   {x:#, y:#}  node position in screen coords

          if (node.data.shape=='dot'){
            gfx.oval(pt.x-(w*2)/3, pt.y-(w*2)/3-4, w*4/3, w*4/3, {fill:node.data.color, alpha:node.data.alpha})
            gfx.text(node.name, pt.x, pt.y+7, {color:"white", align:"center", font:"Helvetica", size:20})
          } 
          // else if (
          //   node.name=='walterroman.com' ||
          //   node.name=='custom wp theme' ||
          //   node.name=='algorithms' ||
          //   node.name=='photo gallery' ||
          //   node.name=='simple imdb' ||
          //   node.name=='what you see now'
          //   ) {
          //   gfx.rect(pt.x-w/2, pt.y-12, w, 24, 4, {fill:node.data.color, alpha:node.data.alpha})
          //   gfx.text(node.name, pt.x, pt.y+9, {color:"white", align:"center", font:"Helvetica", size:16})
          //   gfx.text(node.name, pt.x, pt.y+9, {color:"white", align:"center", font:"Helvetica", size:16})            
          // }
          else{
            // gfx.rect(pt.x-(w/2)-6, pt.y-12, w+4, 26, 6, {fill:"white", stroke:"black",alpha:1})

            gfx.rect(pt.x-(w/2)-4, pt.y-10, w, 22, 4, {fill:node.data.color, stroke:"black", alpha:node.data.alpha})
            gfx.text(node.name, pt.x-3, pt.y+9, {color:"white", align:"center", font:"Helvetica", size:14})
          }
        })    	

        that._drawVignette()
      },

      resize:function(){
        var w = $(window).width(),
            h = ($(window).height()-dom.offset().top);
        if (w >= 1000) {
          if (h <= 750) {
            h = 750  
          }
          canvas.width = w; canvas.height = h;// resize the canvas element to fill the screen
          particleSystem.screenSize(w,h) // inform the system so it can map coords for us
          that.redraw()          
        }

        // $("#shuffle").css("margin-top",h-100)

        // changes bottom vignette according to resize
        _vignette = null
      },

      switchSection:function(newSection){
        var parent = sys.getEdgesFrom(newSection)[0].source
        var children = $.map(sys.getEdgesFrom(newSection), function(edge){
          return edge.target
        })
        
        sys.eachNode(function(node){
          if (node.data.shape=='dot') return // skip all but leafnodes

          var nowVisible = ($.inArray(node, children)>=0)
          var newAlpha = (nowVisible) ? 1 : 1
          var dt = (nowVisible) ? .5 : .5
          sys.tweenNode(node, dt, {alpha:newAlpha})

          // sys.tweenEdge(node, dt, {alpha:newAlpha, strokeStyle:"rgba(255,0,0,1)"})

          if (newAlpha==1){
          // This affects child nodes directly, thus parents through gravity
            node.p.x += 3*(Math.random()-1)
            node.p.y += 3*(Math.random()-1)
            node.tempMass = .001
          } 
        })



      },
      
      initMouseHandling:function(){
        // no-nonsense drag and drop (thanks springy.js)
        var oldmass = 1;
        var dragged = null;
        selected = null;
        nearest = null;

        var _section = null; 

        // set up a handler object that will initially listen for mousedowns then
        // for moves and mouseups while dragging
        var handler = {

          moved:function(e){
            var pos = $(canvas).offset();
            _mouseP = arbor.Point(e.pageX-pos.left, e.pageY-pos.top)
            nearest = sys.nearest(_mouseP);
            selected = null;
            
            if (nearest.node) {
              if (nearest.distance < 50 && nearest.node.data.link) {
                selected = nearest
              }

              if (selected!=null){
                dom.addClass('linkable')
                $("h2").html(selected.node.data.link
                  .replace(/^h\w+/,'')
                  .replace('://','')
                  .replace('www.','')
                  .replace('\.\./','walterroman.com/')
                  .replace('/index.html','')
                  .replace('\#','')
                  )   
              }
              else{
                 dom.removeClass('linkable')
                  $("h2").html("I like to think of myself as a generalist")

                 window.status = ''
              }
            }

            // else 
            //   // (nearest.node.data.link!=false && nearest.node.data.link!="#") 
            // {
            //   console.log(nearest.node.data.link)
            // }

            // if ($.inArray(nearest.node.name, ['languages','portfolio','frames / libs']) >=0 ){
            //   if (nearest.node.name!=_section){
            //     _section = nearest.node.name
            //     that.switchSection(nearest.node.name)
            //   }
            //   dom.removeClass('linkable')
            //   window.status = ''
            // }
            
            return false
          },


          clicked:function(e){
            var pos = $(canvas).offset();
            _mouseP = arbor.Point(e.pageX-pos.left, e.pageY-pos.top)
            dragged = particleSystem.nearest(_mouseP);

            if (nearest && selected && nearest.node===selected.node){
              var link = selected.node.data.link
              if (link.match(/^#/)){
                 $(that).trigger({type:"navigate", path:link.substr(1)})
              }else{
                 window.open(link)
              }
              return false
            }

            if (dragged && dragged.node !== null){
              // while we're dragging, don't let physics move the node
              dragged.node.fixed = true
            }

            $(canvas).bind('mousemove', handler.dragged)
            $(window).bind('mouseup', handler.dropped)

            return false
          },
          dragged:function(e){
            var pos = $(canvas).offset();
            var s = arbor.Point(e.pageX-pos.left, e.pageY-pos.top)

            if (dragged && dragged.node !== null){
              var p = particleSystem.fromScreen(s)
              dragged.node.p = p
            }

            return false
          },

          dropped:function(e){
            if (dragged===null || dragged.node===undefined) return
            if (dragged.node !== null) dragged.node.fixed = false
            dragged.node.tempMass = 1000
            dragged = null
            $(canvas).unbind('mousemove', handler.dragged)
            $(window).unbind('mouseup', handler.dropped)
            _mouseP = null
            return false
          }
        }
        
        // start listening
        $(canvas).mousemove(handler.moved);
        $(canvas).mousedown(handler.clicked);
      },
      
    }
    return that

          $('#viewport').width("100%")

  }    

  $(document).ready(function(){
    var sys = arbor.ParticleSystem() // create the system with sensible repulsion/stiffness/friction
    sys.parameters({
      repulsion: 10000,
      stiffness: 400,
      friction: 0.2,
      gravity:true, // use center-gravity to make the graph settle nicely (ymmv)
      fps: 55,
      dt: 0.02,
      precision: 0.7
    }) 

    var CLR = {
      branch:"#42412d",
      code:"#BB6500",
      doc:"#961800",
      demo:"#002B60"
    }

    var theUI = {
      nodes:{

        portfolio:{color:CLR.branch, shape:"dot", alpha:1}, 
          "walterroman.com":{color:CLR.doc, alpha:1, link:'http://www.walterroman.com'},
          "what you see now":{color:CLR.doc, alpha:1, link:"#you're already here"},
          "wordpress theme":{color:CLR.doc, alpha:1, link:'#coming soon'},
          "photo gallery":{color:CLR.doc, alpha:1, link:'../photoGallery/index.html'},
          "simple imdb":{color:CLR.doc, alpha:1, link:'#coming soon'},
          algorithms:{color:CLR.doc, alpha:1, link:'#coming soon'},

        languages:{color:CLR.branch, shape:"dot", alpha:1},
          python:{color:CLR.code, alpha:1},
          css:{color:CLR.code, alpha:1},
          html:{color:CLR.code, alpha:1},
          javascript:{color:CLR.code, alpha:1},
          php:{color:CLR.code, alpha:1},

        "frames / libs":{color:CLR.branch, shape:"dot", alpha:1},
          django:{color:CLR.demo, alpha:1, link:'https://www.djangoproject.com'},
          jquery:{color:CLR.demo, alpha:1, link:'http://jquery.com'},
          bootstrap:{color:CLR.demo, alpha:1, link:'http://twitter.github.io/bootstrap'},
          "foundation.zurb":{color:CLR.demo, alpha:1, link:'http://foundation.zurb.com'},
          "arbor.js":{color:CLR.demo, alpha:1, link:'http://arborjs.org'},
            },

      edges:{

        portfolio:{
          languages:{length:70},
          "frames / libs":{length:70},

          "simple imdb":{length: 6},
          "walterroman.com":{length:6},
          "what you see now":{length:6},
          "wordpress theme":{length:6},
          "photo gallery":{length:6},
          algorithms:{length:6},
        },

        languages:{
          "frames / libs":{length:70},
          portfolio:{length:70},

          python:{length:5},
          css:{length:20},
          html:{length:10},
          javascript:{length:10},
          php:{length:10},

        },

        "frames / libs":{
          "arbor.js":{length:20},
          django:{length:20},
          jquery:{length:10},
          bootstrap:{length:10},
          "foundation.zurb":{length:10},
        },

        "walterroman.com":{
          "what you see now":{length:30},
          "wordpress theme":{length:25},
          "photo gallery":{length:20},
          languages:{length:10},
          algorithms:{length:10},
        },

        "what you see now":{
          "wordpress theme":{length:15},
          "photo gallery":{length:20},
          algorithms:{length:10},
        },

        "wordpress theme":{
          "photo gallery":{length:15},
          algorithms:{length:15},
        },

        algorithms:{
          "photo gallery":{length:35},
        },



        "simple imdb":{
          python:{length:10},
          django:{length:10},
          jquery:{length:10},

          "frames / libs":{length:20},
          languages:{length:120}
        },

        // "Walter Roman":{
        //   facebook:{length:2},
        //   tumblr:{length:2},
        //   phone:{length:2},
        //   email:{length:2},
        // },

        jquery:{
          javascript:{length:30},

          "frames / libs":{length:20},
          languages:{length:20},
          portfolio:{length:150}
        },

        django:{
          languages:{length:70},
          portfolio:{length:50},
          "frames / libs":{length:20}
        },     

        "arbor.js":{
          languages:{length:80},
          portfolio:{length:60},
        },     

        "foundation.zurb":{
          css:{length:10},
          html:{length:20},
          javascript:{length:20},
        },

        "bootstrap":{
          css:{length:5},
          html:{length:10},
          javascript:{length:30},
        },

        "walterroman.com":{
          css:{length:30},
          html:{length:30},
          javascript:{length:10},

          languages:{length:150},
          "frames / libs":{length:90}
        },
        "what you see now":{
          css:{length:20},
          html:{length:20},
          javascript:{length:20},
          jquery:{length:20},
          "arbor.js":{length:10},

          portfolio:{length:60},
          languages:{length:150},
          "frames / libs":{length:90}
        },     

        algorithms:{
          javascript:{length:10},

          "frames / libs":{length:80},
          languages:{length:20},
        },  

        "wordpress theme":{
          css:{length:20},
          html:{length:20},
          php:{length:10},
          "foundation.zurb":{length:10},
          "what you see now":{length:15},

          "frames / libs":{length:40},
          languages:{length:40},
        },  

        "photo gallery": {
          css:{length:10},
          html:{length:15},
          jquery:{length:30},
          javascript:{length:15},

          languages:{length:20},
          "frames / libs":{length:140}
        },

        css:{
          html:{length:25},
          javascript:{length:15},
          php:{length:15},
          python:{length:15},

          languages:{length:15},
          "frames / libs":{length:40},
          portfolio:{length:190}
        },

        javascript:{
          html:{length:10},
          php:{length:10},
          python:{length:10},

          portfolio:{length:20},
          "frames / libs":{length:100},
          languages:{length:20}
        },

        html:{
          php:{length:15},
          python:{length:15},

          portfolio:{length:140},
          "frames / libs":{length:15}
        },

        python:{
          php:{length:15},
          django:{length:8}
        },

        php:{
          portfolio:{length:20},
        },

        "foundation.zurb":{
          languages:{length:140}
        }

      }
    }

    sys.renderer = Renderer("#viewport") // our newly created renderer will have its .init() method called shortly by sys...
    sys.graft(theUI);

 
    // or, equivalently:
    //
    // sys.graft({
    //   nodes:{
    //     f:{alone:true, mass:.25}
    //   }, 
    //   edges:{
    //     a:{ b:{},
    //         c:{},
    //         d:{},
    //         e:{}
    //     }
    //   }
    // })
    
  })

})(this.jQuery)