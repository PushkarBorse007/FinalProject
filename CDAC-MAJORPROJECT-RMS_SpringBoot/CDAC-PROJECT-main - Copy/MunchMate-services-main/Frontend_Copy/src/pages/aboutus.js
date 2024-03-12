/*const AboutUs = () => {
  return (
    <div>
    <h2 style ={{textAlign:'center',color:'white', marginTop:10}}>About Us</h2>
    <p style ={{marginTop : 30,fontWeight:600,fontFamily:'serif', fontSize:26,fontStyle:'italic',color : 'white'}}>
      At MunchMate, we are dedicated to revolutionizing the way restaurants operate and thrive in today's dynamic culinary landscape. With a passion for exceptional food experiences and a commitment to excellence, we provide comprehensive restaurant management services tailored to meet the unique needs of each establishment.
               </p>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Restaurant_N%C3%A4sinneula.jpg/640px-Restaurant_N%C3%A4sinneula.jpg"
           alt= "image"
           className="rounded mx-auto d-block"
           style={{ height: 300,width:500, display: 'block' }}  />
           <p style ={{marginTop : 40,fontWeight:600,fontFamily:'serif', fontSize:26,fontStyle:'italic',color : 'white'}}>
           Our mission is simple yet profound—to empower restaurant owners and operators with the tools, expertise, and support necessary to drive success. We strive to elevate every aspect of restaurant management, from operational efficiency to customer satisfaction, enabling our clients to achieve their business goals and exceed industry standards.
          </p>

          
        </div>


  );
};

export default AboutUs;
*/

const TeamMemberCard = ({ name, role, imageUrl }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", borderRadius: "5px", textAlign: "center" }}>
      <img src={imageUrl} alt={name} style={{ width: "100px", height: "100px", borderRadius: "50%" }} />
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
};

const AboutUs = () => {
  const teamMembers = [
    { name: "Aishwarya Pusadkar", role: "CEO", imageUrl: "./src/images/Shrashti.jpeg" },
    { name: "Shrashti Tiwari", role: "CTO", imageUrl: "https://via.placeholder.com/150" },
    { name: "Sanjita Rinayat", role: "Marketing Manager", imageUrl: "https://via.placeholder.com/150" },
    { name: "Shaival Paradkar", role: "Head Chef", imageUrl: "https://via.placeholder.com/150" },
    { name: "Pushkar Borse", role: "Customer Support Specialist", imageUrl: "https://via.placeholder.com/150" }
  ];

  return (
    <div>
      <h2 style={{ textAlign: "center", color: "white", marginTop: 10 }}>About Us</h2>
      <p
        style={{
          marginTop: 30,
          fontWeight: 600,
          fontFamily: "serif",
          fontSize: 26,
          fontStyle: "italic",
          color: "white"
        }}
      >
        At MunchMate, we are dedicated to revolutionizing the way restaurants
        operate and thrive in today's dynamic culinary landscape. With a passion
        for exceptional food experiences and a commitment to excellence, we
        provide comprehensive restaurant management services tailored to meet
        the unique needs of each establishment.
      </p>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Restaurant_N%C3%A4sinneula.jpg/640px-Restaurant_N%C3%A4sinneula.jpg"
        alt="image"
        className="rounded mx-auto d-block"
        style={{ height: 300, width: 500, display: "block" }}
      />
      <p
        style={{
          marginTop: 40,
          fontWeight: 600,
          fontFamily: "serif",
          fontSize: 26,
          fontStyle: "italic",
          color: "white"
        }}
      >
        Our mission is simple yet profound—to empower restaurant owners and
        operators with the tools, expertise, and support necessary to drive
        success. We strive to elevate every aspect of restaurant management, from
        operational efficiency to customer satisfaction, enabling our clients to
        achieve their business goals and exceed industry standards.
      </p>

      <div style={{ marginTop: 40 }}>
        <h3 style={{ color: "white" }}>Our Team</h3>
        <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} name={member.name} role={member.role} imageUrl={member.imageUrl} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;