//countDown(4);
// 3
// 2
// 1
// "DONE!"
function countDown (num) {
    let i = num;
    function printCount(){
        console.log(i);
        i --;
        if (i > 0) {
            setTimeout(printCount, 1000);
        }
        else {
            console.log("DONE!");
        }
    }
    setTimeout(printCount, 1000);
}
countDown (15)