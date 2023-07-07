exports.getAllChildren=(request, response) => {

    //database code
    console.log(request.params.id);
    response.status(200).json({ data: [{ id: 1, name: "xxx" },,{id:3,name:"iii"},{id:4,name:"yyy"} ]})
};
exports.getChildrenById=(request, response) => {
    response.status(200).json({data: {id:request.params.id}})
};
exports.addChildren=(request, response) => {

    //database code
    response.status(200).json({ data: "added" })
};

exports.updateChildrenr=(request, response) => {

    //database code
    response.status(200).json({ data: "update" })
};

exports.deleteChildren=(request, response) => {
    
    //database code
    response.status(200).json({ data: "delete" })
};
exports.ChildrenchildClassInfo=(request, response) => {
    
    //database code
    response.status(200).json({ data: [{ id: 1, name: "xxx" }]})
};