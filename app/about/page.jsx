"use client";
import Navbar from "@/components/navbar";

const About = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/DecorImage/mountains.webp')" }}
    >
      <div className="w-full max-w-4xl p-8 text-center">
        <Navbar isAuthorized={true} />
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold mb-4">About One Flash</h1>
          <p className="text-lg mb-4">
            One Flash is a super easy-to-use flashcard website that makes studying way more fun and efficient. Whether you're cramming for a test or just trying to learn something new, our interactive flashcards and cool features are here to help you crush your goals.
          </p>
          <p className="text-lg mb-4">
            This whole site was built as a final project for the <strong>4300 Web Programming</strong> class at the University of Georgia (UGA). The idea was to create something practical—a fully working app where you can create, review, and organize flashcards, all while keeping it simple and responsive.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
