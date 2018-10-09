const express = require('express'); 
const router = express.Router(); 

const employeeCtrl = require('../controllers/employee.controller');
router.get('/', (req, res) => {
    res.send(
        '<html> '+
        '<a href="/api/employees" style="text-align:center">Ver empleados</a>'+
        '</html>'
    );

});
router.get('/api/employees', employeeCtrl.getEmployees);
router.post('/api/employees', employeeCtrl.createEmployee);
router.get('/api/employees/:id', employeeCtrl.getEmployee); 
router.put('/api/employees/:id', employeeCtrl.editEmployee); 
router.delete('/api/employees/:id', employeeCtrl.deleteEmployee); 

module.exports = router; 