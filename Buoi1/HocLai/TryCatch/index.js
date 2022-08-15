var domain = 'techtuts.net'
 
try {
    if (domain !== 'freetuts.net'){
        throw new Error('Domain nay khong phai la trang chu');
    }
} catch (e){
    console.log(e);
} finally{
    console.log('End');
}