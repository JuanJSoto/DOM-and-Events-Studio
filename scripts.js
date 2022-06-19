// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function(){
        let imgObj = document.getElementById('rocket');
        imgObj.style.position = 'absolute';
        imgObj.style.left = '0px';
        imgObj.style.bottom = '0px';
        let status = document.getElementById('flightStatus');
        let shuttleHeight = document.getElementById('spaceShuttleHeight');
        let shuttleWidth = document.getElementById('spaceShuttleWidth')

        let bg = document.getElementById('shuttleBackground');

        let right = this.document.getElementById('right');
        right.addEventListener("click", function() {
                let movementRight = parseInt(imgObj.style.left)+10+'px';
                imgObj.style.left = movementRight;
                shuttleWidth.innerHTML = parseInt(shuttleWidth.innerHTML)+10000+'ft';
                //works         
        });

        let left = this.document.getElementById('left');
        left.addEventListener("click", function() {
                let movementLeft = parseInt(imgObj.style.left)-10+'px';
                imgObj.style.left = movementLeft;
                shuttleWidth.innerHTML = parseInt(shuttleWidth.innerHTML)+(-10000)+'ft';
        });

        let down = this.document.getElementById('down');
        down.addEventListener("click", function(){
                let movementDown = parseInt(imgObj.style.bottom)-10+'px';
                imgObj.style.bottom = movementDown;
                shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML)-10000+'ft';
        });

        let up = this.document.getElementById('up');
        up.addEventListener("click", function(){
                let movementUp = parseInt(imgObj.style.bottom)+10+'px';
                imgObj.style.bottom = movementUp;
                shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML)+10000+'ft';
        });

        let takeOff = this.document.getElementById('takeoff');
        takeOff.addEventListener("click", function(){
                result = window.confirm("Are you sure the shuttle is ready for takeoff?");
                if(result){
                        bg.style.backgroundColor = 'blue';
                        shuttleHeight.innerHTML = '10000';
                        status.innerHTML = "Shuttle in flight";
                        document.getElementById("rocket").style.bottom = "20px";                        
                };
        });

        let land = this.document.getElementById('landing');
        land.addEventListener("click", function(){
                bg.style.backgroundColor = 'green';
                window.alert("The shuttle is landing. Landing gear engaged.");
                shuttleHeight.innerHTML = '0';
                //shuttleWidth.innerHTML = '0';
                status.innerHTML = 'Shuttle has landed';
                imgObj.style.bottom = '0px';
                imgObj.style.left = '0px';
                document.getElementById("rocket").style.bottom = "10px";                
        });

        let missionAbort = this.document.getElementById('missionAbort');
        missionAbort.addEventListener("click", function(){
                result = window.confirm("Are you sure you want to end the mission?");
                if(result) {
                        bg.style.backgroundColor = 'green';
                        shuttleHeight.innerHTML = '0';
                        //shuttleWidth.innerHTML = '0';
                        status.innerHTML = "Mission aborted";
                        imgObj.style.bottom = '0px';
                        imgObj.style.left = '0px';
                }
        });
});








        // const flightStatus = document.getElementById("flightStatus");
        // const takeoffButton = document.getElementById("takeoff");
        // takeoffButton.addEventListener("click", function() {
        //         let response = window.confirm("confirm that the shuttle is ready for takeoff");
        //         if(response) {
        //                 flightStatus.innerHTML = "Shuttle in flight";
        //                 document.getElementById('shuttleBackground').style.backgroundColor = 'blue';
        //                 document.getElementById("rocket").style.bottom = "100px";

        //         };    
        // });








//no mas

