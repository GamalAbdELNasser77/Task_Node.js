exports.getAllClass=(request, response) => {

    //database code
    console.log(request.params.id);
    response.status(200).json({ data: [{ id: 1, className: "kkkk" },{id:2,className:"rrrr"} ]})
};
exports.getClassById=(request, response) => {
    response.status(200).json({data: {id:request.params.id}})
};
exports.addClass=(request, response) => {

    //database code
    response.status(200).json({ class: "added" })
};

exports.updateClass=(request, response) => {

    //database code
    response.status(200).json({ class: "update" })
};

exports.deleteClass=(request, response) => {
    
    //database code
    response.status(200).json({ class: "delete" })
};
exports.getClassChildrenInfo=(request, response) => {
    
    //database code
    response.status(200).json({ data: [{ id: 1, className: "kkkk" }]})
};
exports.getClassSupervisorInfo=(request, response) => {
    
    //database code
    response.status(200).json({ data: [{ id: 1, className: "michael" }]})
};