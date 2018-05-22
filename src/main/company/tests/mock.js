const db = require('../../../database')

module.exports = {
    
    // Company

    EXIST_COMPANY: 1,
    NON_EXIST_COMPANY: 9999,
	
	OLD_VALID_COMPANY: {
		NameEN: 'AIS',
		NameTH: 'แอดวานซ์ อินโฟร์ เซอร์วิส'
	},
	
	NEW_VALID_COMPANY: {
		NameEN: 'Exxon Mobil',
		NameTH: 'เอ็กซอนโมบิล คอร์ปอเรชั่น'
	},
    
    // Company Branch

    EXIST_COMPANY_BRANCH: {
        CompanyID: '2', 
        BranchName: '1',
    },

    NON_EXIST_COMPANY_BRANCH: {
        CompanyID: '2',
        BranchName: 'FakeBranch',
    },
	
	OLD_VALID_COMPANY_BRANCH:{
		CompanyID: '1',
		BranchName: 'Pinklao',
		Manager: 'Jon Doe',
		TelNo: '000-111-000-0',
		Address: '111/2 Phar Pinklao rd.',
		City: 'Pinklao',
		State: 'Taling chan',
		PostalCode: '10113',
		Country: 'Thailand',
	},
	
	NEW_VALID_COMPANY_BRANCH:{
		CompanyID: '1',
		BranchName: 'Moonlake',
		Manager: 'John Hiddle',
		TelNo: '000-000-000-0',
		Address: '111/2 Moonlake rd.',
		City: 'Moon',
		State: 'Lake',
		PostalCode: '999999',
		Country: 'Moomoo',
	},


    // Methods
    
    removeCompanyByNameIfExist: function(companyName) {
        return function(done) {
            // Find the company if it exists ...
             db.query('SELECT `CompanyID` FROM rexchula.`company` WHERE NameEN = ? LIMIT 1;', companyName, (err, results, fields) => {
                 if (err) {
                     console.log(err);
                 } 
     
                 // ... and delete it if it exists
                 if (results.length !== 0) {
                     console.log(results);
                     db.query('DELETE FROM rexchula.`company` WHERE CompanyID = ?;', results[0], (err, results, fields) => {
                         if (err) {
                             console.log(err);
                         };
                         done();
                     });
                 } else {
                     done();
                 }
             });
         }
    },

    resetCompanyTable: function(done) {
        db.query('DELETE FROM rexchula.`company` WHERE CompanyID = ?;', this.NON_EXIST_COMPANY, (err, results, fields) => {
            if (err) {
                console.log(err);
            }
            this.removeCompanyByNameIfExist(this.OLD_VALID_COMPANY.NameEN)(() => {
                this.removeCompanyByNameIfExist(this.NEW_VALID_COMPANY.NameEN)(() => {
                    db.query("INSERT INTO rexchula.`company` SET ?;", this.OLD_VALID_COMPANY, (err, results, fields) => {
                        if (err) {
                            console.log(err);
                        }
                        done();
                    })
                })
            })
        });
    },

    resetBranchTable: function(done) {
        db.query('DELETE FROM rexchula.`company_branch` WHERE CompanyID = ? AND BranchName = ?;', [this.NON_EXIST_COMPANY_BRANCH.CompanyID, this.NON_EXIST_COMPANY_BRANCH.BranchName], (err, results, fields) => {
            if (err) {
                console.log(err);
            }
            db.query('DELETE FROM rexchula.`company_branch` WHERE CompanyID = ? AND BranchName = ?;', [this.NEW_VALID_COMPANY_BRANCH.CompanyID, this.NEW_VALID_COMPANY_BRANCH.BranchName], (err, results, fields) => {
                if (err) {
                    console.log(err);
                }
                db.query('DELETE FROM rexchula.`company_branch` WHERE CompanyID = ? AND BranchName = ?;', [this.OLD_VALID_COMPANY_BRANCH.CompanyID, this.OLD_VALID_COMPANY_BRANCH.BranchName], (err, results, fields) => {
                    if (err) {
                        console.log(err);
                    }
                    db.query("INSERT INTO rexchula.`company_branch` SET ?;", this.OLD_VALID_COMPANY_BRANCH, (err, results, fields) => {
                        if (err) {
                            console.log(err);
                        }
                        done();
                    })
                });
            });
        });
    },
    
}