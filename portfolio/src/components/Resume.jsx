import Resume from "../assets/QasimKhanResume.pdf";

const DownloadResume = () => {
  return (
    <div className="flex justify-center mt-8">
      <a
        href={Resume}
        download="QasimKhanResume.pdf"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition"
      >
        Download My Resume
      </a>
    </div>
  );
};

export default DownloadResume;
