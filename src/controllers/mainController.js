
async function home (req, res){
    try{
        const user = req.session.user;
        const session = req.session;
        res.send({session});
    }
    catch(err){
        throw new Error(err)
    }
};

export {
    home
}