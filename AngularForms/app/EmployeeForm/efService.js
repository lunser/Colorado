angularFormsApp.factory('efService',
    function() {
        return {
            employee: {
                fullName: "Milton Waddams",
                notes: "the ideal emploee. Just don't touch the red stapler, please.",
                department: "Administration",
                perkCar: true,
                perkStock: false,
                perkSixWeeks: true,
                payrollType: "none"
            }
        }
    });