import profilepic from "@/public/images/profile-pic-temp.webp";
import github from "@/public/icons/github.png";
import linkedin from "@/public/icons/linkedin.png";
import link from "@/public/icons/link.png";
import editprofile from "@/public/icons/editprofile.png";
import saveporfile from "@/public/icons/saveprofile.png";
import photocamera from "@/public/icons/photo-camera.png";
import layer from "@/public/icons/layer.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// // Schema for saved projects
// const savedProjectSchema = new mongoose.Schema({
//     projectId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Project' // Reference to the Project model
//     }
// });

// // Schema for GitHub likes
// const gitHubLikeSchema = new mongoose.Schema({
//     repositoryName: String,
//     repositoryUrl: String
// });

// // Schema for social media profiles
// const socialMediaSchema = new mongoose.Schema({
//     platform: String,
//     url: String
// });

// // Schema for skills
// const skillSchema = new mongoose.Schema({
//     name: String,
//     proficiency: {
//         type: String,
//         enum: ['Beginner', 'Intermediate', 'Advanced']
//     }
// });

// // Schema for uploaded projects
// const uploadedProjectSchema = new mongoose.Schema({
//     projectId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'Project' // Reference to the Project model
//     }
// });

// // Schema for user profile
// const userProfileSchema = new mongoose.Schema({
//     userId: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: 'User' // Reference to the User model
//     },
//     username: {
//         type: String,
//         required: [true, "Please provide a username"],
//         unique: true
//     },
//     email: {
//         type: String,
//         required: [true, "Please provide an email"],
//         unique: true
//     },
//     fullName: String,
//     bio: String,
//     avatarUrl: String,
//     universityOrCollege: String, // University or college name
//     linkedIn: String,
//     websiteUrl: String,
//     location: String,
//     savedProjects: [savedProjectSchema], // Array of saved projects
//     gitHubLikes: [gitHubLikeSchema], // Array of GitHub likes
//     socialMedia: [socialMediaSchema], // Array of social media profiles
//     skills: [skillSchema], // Array of skills
//     uploadedProjects: [uploadedProjectSchema], // Array of uploaded projects
//     createdAt: {
//         type: Date,
//         default: Date.now
//     }
// });

const ProfileInfo = ({}) => {
  const [edit, setEdit] = useState(false);
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);

  const technologiesData = [
    { id: 1, domain: "Frontend", name: "React" },
    { id: 2, domain: "Frontend", name: "Vue.js" },
    { id: 3, domain: "Frontend", name: "Angular" },
    { id: 4, domain: "Frontend", name: "Svelte" },
    { id: 5, domain: "Backend", name: "Node.js" },
    { id: 6, domain: "Backend", name: "Django" },
    { id: 7, domain: "Backend", name: "Express.js" },
    { id: 8, domain: "Backend", name: "Flask" },
    { id: 9, domain: "Database", name: "MongoDB" },
    { id: 10, domain: "Database", name: "MySQL" },
    { id: 11, domain: "Database", name: "PostgreSQL" },
    { id: 12, domain: "Database", name: "SQLite" },
    { id: 13, domain: "Database", name: "Firebase" },
    { id: 14, domain: "Other", name: "Next.js" },
    { id: 15, domain: "Other", name: "Laravel" },
    { id: 16, domain: "Other", name: "Deno" },
    { id: 17, domain: "Other", name: "Gatsby.js" },
    { id: 18, domain: "Other", name: "Nuxt.js" },
    { id: 19, domain: "Other", name: "Gulp.js" },
    { id: 20, domain: "Other", name: "NPM" },
    { id: 21, domain: "Other", name: "Yarn" },
    { id: 22, domain: "Other", name: "NPM" },
    { id: 23, domain: "Other", name: "Yarn" },
    { id: 24, domain: "Other", name: "NPM" },
    { id: 25, domain: "Other", name: "Yarn" },
    { id: 26, domain: "Other", name: "NPM" },
    { id: 27, domain: "Other", name: "Yarn" },
    { id: 28, domain: "Other", name: "NPM" },
    { id: 29, domain: "Other", name: "Yarn" },
    { id: 30, domain: "Other", name: "NPM" },
    { id: 31, domain: "Other", name: "Yarn" },
    { id: 32, domain: "Backend", name: "NPM" },

    // Add more technologies in different domains as needed
  ];

  // Sample list of projects
  const projects = [
    { id: 1, name: "Project 1" },
    { id: 2, name: "Project 2" },
    { id: 3, name: "Project 3" },
    { id: 4, name: "Project 4" },
    { id: 5, name: "Project 5" },
    { id: 6, name: "Project 6" },
  ];

  const handleCheckboxChange = (technology) => {
    const isSelected = selectedTechnologies.some((t) => t.id === technology.id);
    if (isSelected) {
      setSelectedTechnologies(
        selectedTechnologies.filter((t) => t.id !== technology.id)
      );
    } else {
      setSelectedTechnologies([...selectedTechnologies, technology]);
    }
  };

  return (
    <div className="flex flex-col h-[95vh] overflow-y-auto scrollbar-hide">
      <div className="flex  flex-none flex-col h-[34%] w-[100%] relative">
        <div className="bg-[#0A1436] h-[50%] w-[100%] pl-[27%] relative">
          {!edit ? (
            <Image
              src={editprofile}
              alt="edit Profile"
              className="absolute right-5 top-4"
              width={30}
              height={30}
              style={{ filter: "invert(100%)" }}
              onClick={() => setEdit(true)}
            />
          ) : (
            <Image
              src={saveporfile}
              alt="Save Profile"
              className="absolute right-5 top-4"
              width={30}
              height={30}
              style={{ filter: "invert(100%)" }}
              onClick={() => setEdit(false)}
            />
          )}
          {edit ? (
            <input
              className="text-3xl mt-[9%] font-bold rounded-sm pl-1 bg-slate-300 text-black w-64"
              type="text"
              placeholder="FullName"
            />
          ) : (
            <h1 className="text-3xl mt-[9%] font-bold">FullName</h1>
          )}
        </div>
        <div className="absolute left-16 top-[5%] rounded-full  m-2">
          <Image
            src={profilepic}
            alt="profile"
            className="h-48 w-48 rounded-full "
            width={100}
            height={100}
          />
          {edit && (
            <Image
              src={photocamera}
              alt="edit Profile photo"
              className="absolute right-3 bottom-3"
              width={30}
              height={30}
              style={{ filter: "invert(100%)" }}
              // onClick={() => setEdit(true)}
            />
          )}
        </div>
        <div className="flex flex-col justify-center items-start ml-[27%]">
          {!edit ? (
            <h1 className="text-base">username</h1>
          ) : (
            <input
              className="mt-1 rounded-sm pl-1 bg-slate-300 text-black w-64"
              type="text"
              placeholder="UserName"
            />
          )}
          {!edit ? (
            <h1 className="text-base">email</h1>
          ) : (
            <input
              className="mt-1 rounded-sm pl-1 bg-slate-300 text-black w-64"
              type="email"
              placeholder="email"
            />
          )}
        </div>
      </div>

      <div className="flex flex-row w-[100%]">
        <div className="flex flex-col justify-center items-start border-2 border-slate-500 m-3 p-4 rounded-md w-[40%] ">
          <h1 className="text-3xl font-semibold mb-2">Links</h1>
          <div className="flex flex-col justify-center items-center">
            {/* github */}
            <div className="flex flex-row items-center m-2">
              <Image
                src={github}
                alt="profile"
                width={20}
                height={20}
                style={{ filter: "invert(100%)" }}
              />
              {edit ? (
                <input
                  className="ml-2 rounded-sm pl-1 bg-slate-300 text-black w-64"
                  type="text"
                  placeholder="Github"
                />
              ) : (
                <h1 className="ml-2">github.com</h1>
              )}
            </div>

            {/* linked in */}
            <div className="flex flex-row  items-center m-2">
              <Image
                src={linkedin}
                alt="Linked In"
                width={20}
                height={20}
                style={{ filter: "invert(100%)" }}
              />
              {edit ? (
                <input
                  type="text"
                  className="ml-2 rounded-sm pl-1 bg-slate-300 text-black w-64"
                  placeholder="Linked In"
                />
              ) : (
                <h1 className="ml-2">linkedin.com</h1>
              )}
            </div>

            {/* personal website */}
            <div className="flex flex-row items-center m-2">
              <Image
                src={link}
                alt="Personal Website"
                width={20}
                height={20}
                style={{ filter: "invert(100%)" }}
              />
              {edit ? (
                <input
                  type="text"
                  className="ml-2 rounded-sm pl-1 bg-slate-300 text-black w-64"
                  placeholder="Personal Website"
                />
              ) : (
                <h1 className="ml-2">personalprofile.com</h1>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start border-2 border-slate-500 m-3 p-4 rounded-md w-[60%]">
          <h1 className="text-3xl font-semibold mb-2">Projects</h1>
          <div className="flex flex-col w-[100%] h-40 overflow-y-auto scrollbar-hide">
            {projects.map((project, index) => (
              <div className="flex flex-row items-center m-2" key={index}>
                <Image
                  src={layer}
                  alt="project Description"
                  width={20}
                  height={20}
                  style={{ filter: "invert(100%)" }}
                />
                {edit ? (
                  <input
                    className="ml-2 rounded-sm pl-1 bg-slate-300 text-black w-64"
                    type="text"
                    placeholder={project.name}
                  />
                ) : (
                  <h1 className="ml-2">{project.name}</h1>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-start border-2 border-slate-500 m-3 p-4 rounded-md ">
        <h1 className="text-3xl font-semibold mb-2">About</h1>
        <div className="flex flex-col justify-center items-center w-full h-full">
          {edit ? (
            <textarea
              className="w-full h-full ml-2 border-collapse bg-transparent rounded-sm p-1 bg-slate-300 text-white"
              placeholder="About yourself"
            />
          ) : (
            <p className="ml-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Repellendus mollitia, aliquam est odio cum et, consequatur
              repellat deleniti architecto praesentium dignissimos, provident
              autem optio perspiciatis dolore cumque perferendis. Quae, sint!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              molestiae saepe consectetur similique, velit quisquam doloremque
              reiciendis explicabo accusamus ducimus veritatis necessitatibus?
              Quisquam, unde. Voluptatibus quaerat consequuntur alias molestias
              ratione!
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-col justify-center border-2 border-slate-500 m-3 rounded-md ">
        {edit && (
          <div className="flex flex-col border-b-2 border-slate-500 p-2">
            <h2 className="text-lg font-bold mb-2">All Technologies</h2>
            <div className="flex overflow-auto scrollbar-hide">
              {Array.from(
                new Set(technologiesData.map((tech) => tech.domain))
              ).map((domain) => (
                <div key={domain} className="mr-4">
                  <h2 className="text-lg font-bold">{domain}</h2>
                  <div className="p-2 h-40 flex flex-wrap">
                    {technologiesData
                      .filter((tech) => tech.domain === domain)
                      .map((technology) => (
                        <div
                          key={technology.id}
                          className="flex items-center mb-2 w-28"
                        >
                          <input
                            type="checkbox"
                            id={technology.name}
                            checked={selectedTechnologies.some(
                              (t) => t.id === technology.id
                            )}
                            onChange={() => handleCheckboxChange(technology)}
                            className="mr-2"
                          />
                          <label htmlFor={technology.name}>
                            {technology.name}
                          </label>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        <div className="flex flex-col ml-4 pt-2 pb-2 pl-0">
          <h2 className="text-lg font-bold">Technologies:</h2>
          <div className="flex flex-wrap">
            {selectedTechnologies.map((technology) => (
              <div key={technology.id} className="flex items-center w-28">
                <input
                  type="checkbox"
                  id={`selected-${technology.name}`}
                  checked
                  readOnly
                  className="mr-2"
                />
                <label htmlFor={`selected-${technology.name}`}>
                  {technology.name}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
