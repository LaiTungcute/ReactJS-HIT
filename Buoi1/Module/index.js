



// function F(x) {
//     if(x==0) return Math.cos(x);
//     else if(x<0) return x;
//     else return F(x-Math.PI) + F(x-Math.PI/2);
// }


// // F(3*PI/2) = F(3*PI/2 - PI) + F(3*PI/2 - PI/2)
// // = F(PI/2) + F(PI)
// // = F(PI/2 - PI) + F(PI/2 - PI/2) + F(PI-PI) + F(PI - PI/2)
// // = F(-PI/2) + F(0) + F(0) + F(PI/2)
// // = -PI/2 + cos(0) + cos(0) + F(PI/2 - PI) + F(PI/2 - PI/2)
// // = -PI/2 + 1 + 1 + F(-PI/2) + F(0)
// // = -PI/2 + 1 + 1 + -PI/2 + 1
// // = -0.14159

// console.log(F(3*Math.PI/2));

// let x = [9.5, 2.1, 8.4, 6.4, 4.3];

// function Min(x, left, right) {
//     if(left==right) return x[left];
//     else if(left==right-1){
//         if(x[left]<x[right]) return x[left];
//         else return x[right];
//     }
//     else {
//         mid = Math.floor((left + right)/2);
//         minLeft = Min(x,left,mid);
//         minRight = Min(x,mid+1,right);
//         if(minLeft<minRight) return minLeft;
//         else return minRight;
//     }
// }                                

// // mid = Math.floor((5 + 4)/2);
// // console.log(mid);
let x = [3.5, 3.2, 3.9, 6.4, 4.3, 7.6, 3.2]

function check(x,left,right, a) {
    t = 0;
    if(left==right) {
        if(x[left]==a) t++; 
        return t;
    }
    // else if(left==right-1) {
    //     if(x[left]==x[right]) t++;
    //     return t;
    // }
    else {
        mid = (left + right) /2;
        test1 = check(x,left, mid, a);
        test2 = check(x,mid+1,right,a);
        return test1+test2;
    }
}

console.log(check(x,0, x.lengh-1, 3.2));

x = [3.5, 3.2, 3.9, 6.4, 4.3, 7.6, 3.2]

left = 0;
right = 7;
mid = (7+0)/2 = 3
(1) test1 = check(x,0,3,3.2). Dãy cần xét là: {3.5, 3.2, 3.9, 6.4}
    (1.1) 
        left = 0;
        right = 3;
        mid = (3+0)/2 = 1
        test1 = check(x, 0, 1)

// console.log(Min(x,0, x.length-1));

// function f(x) {
//     if(x>=7) return x;
//     else return x*x + f(x+1);
// }

// console.log(f(3));

// f(3) = 3*3 + f(3+1)
//      = 9 + f(4)
//      = 9 + 4*4 + f(4+1)
//      = 9 + 16 + f(5)
//      = 25 + 5*5 + f(5+1)
//      = 25 + 25 + f(6)
//      = 50 + 6*6 + f(7)
//      = 50 + 36 + 7
//      = 93