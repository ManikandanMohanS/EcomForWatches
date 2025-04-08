import styles from "./Contact.module.css";

const branches = [
  {
    district: "Chennai",
    manager: "Mr. Aravind",
    phone: "9876543210",
    address: "123, Mount Road, Chennai - 600002",
  },
  {
    district: "Coimbatore",
    manager: "Ms. Divya",
    phone: "9845671230",
    address: "456, Gandhipuram, Coimbatore - 641012",
  },
  {
    district: "Madurai",
    manager: "Mr. Karthik",
    phone: "9898989898",
    address: "789, Anna Nagar, Madurai - 625020",
  },
  {
    district: "Hosur",
    manager: "Mr. Ramesh",
    phone: "9876543210",
    address: "No. 12, Sipcot Phase 2, Hosur - 635126",
  },
  {
    district: "Nagapattinam",
    manager: "Ms. Keerthi",
    phone: "9845012345",
    address: "45A, Beach Road, Nagapattinam - 611001",
  },
  {
    district: "Kanyakumari",
    manager: "Mr. Dinesh",
    phone: "9003456789",
    address: "88, Main Street, Kanyakumari - 629702",
  },
  {
    district: "Trichy",
    manager: "Mr. Prabhu",
    phone: "9789098765",
    address: "No. 5, Rockfort Main Road, Trichy – 620002",
  },
  {
    district: "Bangalore",
    manager: "Ms. Anjali",
    phone: "9845032100",
    address: "10A, MG Road, Bangalore – 560001",
  },
];

const Contact = () => {
  return (
    <div className={styles.contactContainer} id="contact">
      <h2>Branch Contacts</h2>
      <div className={styles.branchGrid}>
        {branches.map((branch, index) => (
          <div key={index} className={styles.branchCard}>
            <h3>{branch.district} Branch</h3>
            <p>
              <strong>Manager:</strong> {branch.manager}
            </p>
            <p>
              <strong>Phone:</strong> {branch.phone}
            </p>
            <p>
              <strong>Address:</strong> {branch.address}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
