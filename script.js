const employeesData = [
    { name: "Abdul Sathar", branch: "Fujairah", branchCode: "BTF", position: "Manager", officeNo: "+971 9 2243874", mobileNo: "+971 55 3009091", email: "manager.btf@boscogrp.com", counterEmail: "btf.sales@boscogrp.com" },
    { name: "Ahmed Abu-Moghli", branch: "Dubai", branchCode: "BTD", position: "Manager", officeNo: "04-2550064", mobileNo: "055 3009176", email: "manager.btd@boscogrp.com", counterEmail: "btd.sales@boscogrp.com" },
    { name: "Ahmed Samir", branch: "Sharjah", branchCode: "BTS", position: "Sales", officeNo: "+971 6 5421050", mobileNo: "055 3009140", email: "bts.sales3@boscogrp.com", counterEmail: "bts.sales2@boscogrp.com" },
    { name: "Dinesh", branch: "Abu Dhabi", branchCode: "BTA", position: "Sales", officeNo: "02 5575336", mobileNo: "055 3009027", email: "bta.sales@boscogrp.com", counterEmail: "bta.sales@boscogrp.com" },
    { name: "Faraz Ahmed Rana", branch: "Dubai", branchCode: "BTD", position: "Sales", officeNo: "04-2550064", mobileNo: "055 3009186", email: "btd.sales2@boscogrp.com", counterEmail: "btd.sales@boscogrp.com" },
    { name: "Fekry Gaber", branch: "Abu Dhabi", branchCode: "BTA", position: "Sales", officeNo: "03 7610296", mobileNo: "055 3009120", email: "bta.sales@boscogrp.com", counterEmail: "bta.sales@boscogrp.com" },
    { name: "Gaurav Poudwal", branch: "Ras Al-Khaimah", branchCode: "BTR", position: "Sales", officeNo: "07-2212777", mobileNo: "055 3009185", email: "sales.btr@boscogrp.com", counterEmail: "sales.btr@boscogrp.com" },
    { name: "Giji John", branch: "Sharjah", branchCode: "BTS", position: "Manager", officeNo: "06-5421050", mobileNo: "055 3009171", email: "giji.john@boscogrp.com", counterEmail: "bts.sales2@boscogrp.com" },
    { name: "Jamshed Ahmed", branch: "Abu Dhabi", branchCode: "BTA", position: "Sales", officeNo: "03 7610296", mobileNo: "055 3009078", email: "bta.sales@boscogrp.com", counterEmail: "bta.sales@boscogrp.com" },
    { name: "Khaleelulla", branch: "Fujairah", branchCode: "BTF", position: "Sales", officeNo: "+971 9 2243874", mobileNo: "+971 55 3009033", email: "btf.sales@boscogrp.com", counterEmail: "btf.sales@boscogrp.com" },
    { name: "Khuram Shahzad", branch: "Ras Al-Khaimah", branchCode: "BTR", position: "Sales", officeNo: "07-221277", mobileNo: "055 3009189", email: "sales.btr@boscogrp.com", counterEmail: "sales.btr@boscogrp.com" },
    { name: "Mathew Thomas", branch: "Ras Al-Khaimah", branchCode: "BTR", position: "Sales", officeNo: "07-2212777", mobileNo: "055 3009023", email: "sales.btr@boscogrp.com", counterEmail: "sales.btr@boscogrp.com" },
    { name: "Mohamed Fathi", branch: "Sharjah", branchCode: "BTS", position: "Sales", officeNo: "06-5421050", mobileNo: "055 3009063", email: "sales.bts9@boscogrp.com", counterEmail: "sakr8793@gmail.com" },
    { name: "Mohammad Shatti", branch: "Abu Dhabi", branchCode: "BTA", position: "Manager", officeNo: "(02) 557 5336", mobileNo: "055 3009005", email: "public.relations@boscogrp.com", counterEmail: "bta.sales@boscogrp.com" },
    { name: "Muhammed Bilal", branch: "Dubai", branchCode: "BTD", position: "Sales", officeNo: "04-2550064", mobileNo: "054 4932861", email: "btd.sales@boscogrp.com", counterEmail: "btd.sales@boscogrp.com" },
    { name: "Shanif Mohammad", branch: "Ras Al-Khaimah", branchCode: "BTR", position: "Sales", officeNo: "07-2212777", mobileNo: "055 3009200", email: "sales.btr@boscogrp.com", counterEmail: "sales.btr@boscogrp.com" },
    { name: "Sheheer Kulangara", branch: "Ajman", branchCode: "BTAJ", position: "Manager", officeNo: "-5420085", mobileNo: "055 3009076", email: "shaheer.kulangara@boscogrp.com", counterEmail: "btajm.sales@boscogrp.com" },
    { name: "Tom Jose", branch: "Fujairah", branchCode: "BTF", position: "Sales", officeNo: "+971 9 2243874", mobileNo: "+971 55 3009117", email: "btf.sales@boscogrp.com", counterEmail: "btf.sales@boscogrp.com" },
    { name: "Jayson Thomas", branch: "Al Ain", branchCode: "BTAA", position: "Manager", officeNo: "03 7610296", mobileNo: "055 498 4162", email: "manager.btalain@boscogrp.com", counterEmail: "bta.sales@boscogrp.com" },
    { name: "Jayesh Varghese", branch: "Ras Al-Khaimah", branchCode: "BTR", position: "Manager", officeNo: "07-2212777", mobileNo: "553009008", email: "jayesh.varghese@boscogrp.com", counterEmail: "sales.btr@boscogrp.com" }
];

// Initialize branches without duplicates
function initializeBranches() {
    const branchCardsContainer = document.getElementById("branchCards");
    // Create a unique list of branches
    const uniqueBranches = [...new Set(employeesData.map(emp => emp.branchCode))].map(code => {
        return employeesData.find(emp => emp.branchCode === code);
    });

    uniqueBranches.sort((a, b) => a.branch.localeCompare(b.branch));

    uniqueBranches.forEach(function(branch) {
        const card = document.createElement("div");
        card.className = "branch-card";
        card.textContent = `${branch.branch} (${branch.branchCode})`;
        card.onclick = () => showEmployees(branch.branchCode, branch.branch);
        branchCardsContainer.appendChild(card);
    });
}

// Show employees of the selected branch
function showEmployees(branchCode, branchName) {
    const employeesContainer = document.getElementById("employees");
    employeesContainer.innerHTML = '';

    const filteredEmployees = employeesData.filter(emp => emp.branchCode === branchCode);
    document.getElementById("branch-name").textContent = branchName; // Update branch name

    filteredEmployees.forEach(employee => {
        const empCard = document.createElement("div");
        empCard.className = "employee-card";
        empCard.innerHTML = `<strong>${employee.name}</strong> - ${employee.position}`;
        empCard.onclick = () => showEmployeeDetails(employee);
        employeesContainer.appendChild(empCard);
    });

    document.getElementById("employee-section").classList.remove("hidden");
    document.getElementById("branch-section").classList.add("hidden");
}

// Show employee details in a business card format
function showEmployeeDetails(employee) {
    const detailsDiv = document.getElementById("details");
    detailsDiv.innerHTML = `
        <h3>${employee.name}</h3>
        <p><strong>Branch:</strong> ${employee.branch} (${employee.branchCode})</p>
        <p><strong>Position:</strong> ${employee.position}</p>
        <p><strong>Office No:</strong> ${employee.officeNo}</p>
        <p><strong>Mobile No:</strong> ${employee.mobileNo}</p>
        <p><strong>Email:</strong> <a href="mailto:${employee.email}">${employee.email}</a></p>
        <p><strong>Counter Email:</strong> <a href="mailto:${employee.counterEmail}">${employee.counterEmail}</a></p>
    `;
    document.getElementById("employee-details-section").classList.remove("hidden");
    document.getElementById("employee-section").classList.add("hidden");
}

// Back to the branches section
function backToBranches() {
    document.getElementById("employee-section").classList.add("hidden");
    document.getElementById("branch-section").classList.remove("hidden");
}

// Back to the employee list section
function backToEmployees() {
    document.getElementById("employee-details-section").classList.add("hidden");
    document.getElementById("employee-section").classList.remove("hidden");
}

// Initialize the branch list on page load
window.onload = initializeBranches;
