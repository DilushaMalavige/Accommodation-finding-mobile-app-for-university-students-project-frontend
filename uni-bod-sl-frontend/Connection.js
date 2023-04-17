//filter like this
/*
{
            university:selectedUni,
            tenantType:selectedTenantType,
            tenantNo:selectedTenantNo,
            withMeals:withMealse,
            withFurniture:furniture,
            withBills:bills,
            minMoFee:minMoFee,
            maxMoFee:maxMoFee
        }
*/
export function GetSelectedAds(filters){
    console.log("request");
    console.log(JSON.stringify(filters));
    return new Promise((resolve,reject)=>{
           // http://10.0.2.2:8001/boarding/postAds/search/all
        fetch("http://10.0.2.2:8001/boarding/postAds/search/all",{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            },
            body:JSON.stringify(filters)
        }).then(response=>response.json()).then(jsonResponse=>{
            console.log("respo");
            console.log(jsonResponse);
            resolve(jsonResponse)
        }).catch((error)=>{
            console.log(error);
            reject(error)
        })
    })
}
//
// export function GetSelectedAds(filters){
//     return new Promise((resolve,reject)=>{
//         resolve([
//             {
//                 university:"University of colombo",
//                 tenantType:"Girl",
//                 tenantNo:"12",
//                 withMeals:true,
//                 withFurniture:true,
//                 billsIncluded:false,
//                 monthlyFee:12000.00,
//                 advance:5000.00,
//                 contact:"0332382377238",
//                 description:"This is fake advertisement for check this application dont try this..",
//                 latitude:35.6762,
//                 longitude:139.6503
//             },{
//                 university:"University of Ruhuna",
//                 tenantType:"Girl",
//                 tenantNo:"12",
//                 withMeals:true,
//                 withFurniture:true,
//                 billsIncluded:false,
//                 monthlyFee:12000.00,
//                 advance:5000.00,
//                 contact:"0332382377238",
//                 description:"This is fake advertisement for check this application dont try this..",
//                 latitude:35.6762,
//                 longitude:139.6503
//             },{
//                 university:"University of Jaffna",
//                 tenantType:"Girl",
//                 tenantNo:"12",
//                 withMeals:true,
//                 withFurniture:true,
//                 billsIncluded:false,
//                 monthlyFee:12000.00,
//                 advance:5000.00,
//                 contact:"0332382377238",
//                 description:"This is fake advertisement for check this application dont try this..",
//                 latitude:9.6838,
//                 longitude:80.0210
//             }
//         ])
//     })
// }
//these kind of response will expexted from server
    // [
    //     {
    //         university:"University of colombo",
    //         tenantType:"Girl",
    //         tenantNo:"12",
    //         withMeals:true,
    //         withFurniture:true,
    //         billsIncluded:false,
    //         monthlyFee:12000.00,
    //         advance:5000.00,
    //         contact:"0332382377238",
    //         description:"This is fake advertisement for check this application dont try this.."
    //     },{
    //         university:"University of Ruhuna",
    //         tenantType:"Girl",
    //         tenantNo:"12",
    //         withMeals:true,
    //         withFurniture:true,
    //         billsIncluded:false,
    //         monthlyFee:12000.00,
    //         advance:5000.00,
    //         contact:"0332382377238",
    //         description:"This is fake advertisement for check this application dont try this.."
    //     },{
    //         university:"University of Jaffna",
    //         tenantType:"Girl",
    //         tenantNo:"12",
    //         withMeals:true,
    //         withFurniture:true,
    //         billsIncluded:false,
    //         monthlyFee:12000.00,
    //         advance:5000.00,
    //         contact:"0332382377238",
    //         description:"This is fake advertisement for check this application dont try this.."
    //     }
    // ]
//here is post model example
/* {"advancePayment": "200", "contactNumber": "0w93727", "description": "Skebr jeie", 
"monthlyFee": "12000", "selectedTenantType": "", "selectedUni": "", 
"tenantNo": 0, "withBills": true, "withFurniture": false, "withMeals": true}
 */
export function createPost(post){
    return new Promise((resolve,reject)=>{
        // http://10.0.2.2:8001/boarding/postAds/search/all
        // http://10.0.2.2:8001/boarding/postAds/create
        fetch("http://10.0.2.2:8001/boarding/postAds/create",{
        method:'POST',
        headers:{
            "Accept":"application/json",
            "Content-Type":'application/json'
        },
        body:JSON.stringify(post)
    }).then(result=>result.json()).then(jsonRes=>{
        resolve(jsonRes.reference)
    }).catch((error)=>{
        reject(error)
    })
    })
}