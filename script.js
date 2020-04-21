 new Glide('.glide').mount();

 var granimInstance = new Granim({
     element: '#canvas-basic',
     direction: 'left-right',
     isPausedWhenNotInView: true,
     states : {
         "default-state": {
             gradients: [
                 ['#ff9966', '#ff5e62'],
                 ['#00F260', '#0575E6'],
                 ['#e1eec3', '#f05053']
             ]
         }
     }
 });

 var granimInstance = new Granim({
     element: '#logo-canvas',
     direction: 'left-right',
     states : {
         "default-state": {
             gradients: [
                 ['#EB3349', '#F45C43'],
                 ['#FF8008', '#FFC837'],
                 ['#4CB8C4', '#3CD3AD'],
                 ['#24C6DC', '#514A9D'],
                 ['#FF512F', '#DD2476'],
                 ['#DA22FF', '#9733EE']
             ],
             transitionSpeed: 2000
         }
     }
 });
