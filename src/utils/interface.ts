
export interface pastes {
    post_id : number; 
    post_description : string;
    post_title : string;
 }

 export interface listOfPastes { // in the future this could have been the titled as pasteProps or somethin closer to it's exacting descrio
    //ption
     post : pastes
     posts?: pastes[]
     onPostChange? : any
    
 }
 

 // instead of two seperate interfaces, perhaps considering the shape of an object of objects