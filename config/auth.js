module.exports = {
    isAdmin: (req, res, next) => {
        if (req.isAuthenticated() && req.user.admin) {
            return next();
        }
        // res.status(401).json({ msg: 'Not authorized' })
        // req.flash('error_msg', 'Please log in to view that resource');
        res.redirect('/login');
    },

    isDoctor: (req, res, next) => {
        if (req.isAuthenticated() && req.user.doctor) {
            return next();
        }
        // res.status(401).json({ msg: 'Not authorized' })
        // req.flash('error_msg', 'Please log in to view that resource');
        res.redirect('/login');
    },

    isPatient: (req, res, next) => {
        if (req.isAuthenticated() && req.user.patient) {
            return next();
        }
        // res.status(401).json({ msg: 'Not authorized' })
        // req.flash('error_msg', 'Please log in to view that resource');
        res.redirect('/login');
    },

    isNotAuthenticated: (req, res, next) => {
        if (!req.isAuthenticated()) {
            return next();
        }
        else if (req.user.admin) {
            res.redirect('/admin')
        }
        else if (req.user.doctor) {
            res.redirect('/doctor')
        }
        else if (req.user.patient) {
            res.redirect('/')
        }
        else{
            res.redirect('/login')
        }
    }
}