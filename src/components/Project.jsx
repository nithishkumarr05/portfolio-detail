const Project = () => {
  return (
    <div id="project" className="bg-[#ffffff] min-h-screen flex items-center">
      <div className="max-w-[90%] md:max-w-[75%] mx-auto font-inter space-y-10 py-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#343434]">
          My Projects
        </h1>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Agro Project */}
          <div className="flex flex-col items-center bg-[#E6E6FA] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#242124] font-extrabold text-[32px] mb-4">Agro</h1>
            <p className="text-lg text-gray-700 mb-4">
              A MERN stack agro-based platform where users can explore farming resources, connect with agricultural experts, and buy/sell agro-products. Built using MongoDB, Express, React, and Node.js.
            </p>
            <a href="https://biosta.netlify.app/" className="text-[#fe5617] font-bold text-lg hover:underline">Live Demo</a>
          </div>

          {/* R & D */}
          <div className="flex flex-col items-center bg-[#E6E6FA] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#242124] font-extrabold text-[32px] mb-4">R & D</h1>
            <p className="text-lg text-gray-700 mb-4">
            Completed R & D Project on Fake-Profile Identification in Social Media using TransformerBased Algorithms. By leveraging deep learning models like RoBERTa. The approach improves fake profile detection by analyzing textual and behavioral patterns efficiently.
            </p>
            <a href="" className="text-[#fe5617] font-bold text-lg hover:underline">Live Demo</a>
          </div>

          {/* gadget-grove */}
          <div className="flex flex-col items-center bg-[#E6E6FA] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#242124] font-extrabold text-[32px] mb-4">Gadget-Grove</h1>
            <p className="text-lg text-gray-700 mb-4">
            Developed a website for a Mobile management system using Html,CSS,Bootstrap,REACT,Node and MongoDB.
            </p>
            <a href="" className="text-[#fe5617] font-bold text-lg hover:underline">Live Demo</a>
          </div>

          {/* CoderLobby Project */}
          <div className="flex flex-col items-center bg-[#E6E6FA] p-6 rounded-2xl shadow-lg">
            <h1 className="text-[#242124] font-extrabold text-[32px] mb-4">process</h1>
            <p className="text-lg text-gray-700 mb-4">
             
            </p>
            <a href="" className="text-[#fe5617] font-bold text-lg hover:underline">Live Demo</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;