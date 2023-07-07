exports.getAllTeachers=(request, response) => {

    //database code
    console.log(request.params.id);
    response.status(200).json({ data: [{ id: 1, name: "michael" },{id:2,name:"melad"} ]})
};
exports.getTeacherById=(request, response) => {
    response.status(200).json({data: {id:request.params.id}})
};

exports.getTeacherSuperVisors=(request, response) => {
    response.status(200).json(({data: [{ id: 1, name: "michael" },{id:2,name:"melad"} ]}))
};

exports.addTeacher=(request, response) => {

    //database code
    response.status(200).json({ data: "added" })
};

exports.updateTeacher=(request, response) => {

    //database code
    response.status(200).json({ data: "update" })
};

exports.deleteTeacher=(request, response) => {
    
    //database code
    response.status(200).json({ data: "delete" })
};