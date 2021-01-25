function runProgram(input){
    // Write code here
    input = input.trim().split(/[\r\n]+/);
    for(var i=0; i<input.length; i++){
        input[i] = input[i].split(" ");
    }
    if(input[1][0]>input[0][0] && input[1][1]>input[0][1]){
        console.log("Upload");
    }else if(input[1][0]<=input[0][0] || input[1][1]<=input[0][1]){
        if(input[1][0]<input[0][0]){
            console.log("Increase Length");
        } else{
            console.log("Increase Width");
        }
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/,"")
   runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});

// ***************************************************

// Split New Line
// split(/[\r\n]+/)