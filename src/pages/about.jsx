
import React from 'react';
import Navbar from '@/components/Navbar';
import { Mic, Headphones, Clock, Users, MessageSquare } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto py-12 px-4">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">About PodcastRoom</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional podcast studios and services to help creators produce amazing content
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              PodcastRoom was founded in 2023 by a team of podcast enthusiasts who saw a need for 
              accessible, professional recording spaces. What started as a single studio has grown 
              into a comprehensive podcasting solution.
            </p>
            <p className="text-gray-700 mb-4">
              Our mission is to make professional podcast production accessible to creators of all 
              experience levels. We believe that everyone deserves the tools and space to share their 
              voice with the world.
            </p>
            <p className="text-gray-700">
              Today, we offer state-of-the-art recording studios, professional editing services, 
              and distribution assistance to help you create a podcast that stands out.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Why Choose Us</h2>
            
            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="bg-podcast-muted p-3 rounded-full h-12 w-12 flex items-center justify-center">
                  <Mic className="text-podcast-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold">Professional Equipment</h3>
                  <p className="text-gray-600">Premium microphones, mixers, and headphones for professional sound quality.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-podcast-muted p-3 rounded-full h-12 w-12 flex items-center justify-center">
                  <Headphones className="text-podcast-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold">Expert Support</h3>
                  <p className="text-gray-600">Technical assistance available to help with setup and recording issues.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-podcast-muted p-3 rounded-full h-12 w-12 flex items-center justify-center">
                  <Clock className="text-podcast-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold">Flexible Scheduling</h3>
                  <p className="text-gray-600">Book when it's convenient for you with our easy online reservation system.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Team</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Chen",
                role: "Founder & Audio Engineer",
                bio: "10+ years of experience in audio production and podcast engineering.",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              },
              {
                name: "Jamie Rodriguez",
                role: "Studio Manager",
                bio: "Ensures smooth operation of all studios and equipment maintenance.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              },
              {
                name: "Taylor Wilson",
                role: "Content Strategist",
                bio: "Helps creators develop compelling podcast concepts and formats.",
                image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
              }
            ].map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-podcast-primary font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-podcast-primary text-white rounded-xl p-8 mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Ready to Start Your Podcast?</h2>
              <p className="text-podcast-text-light opacity-90">
                Book a studio today and begin your podcasting journey
              </p>
            </div>
            
            <button className="bg-white text-podcast-primary px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors">
              Reserve a Studio
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                question: "Do I need to bring my own equipment?",
                answer: "No, all our studios are fully equipped with professional microphones, headphones, and mixing equipment. Just bring yourself and your content ideas!"
              },
              {
                question: "How long in advance should I book?",
                answer: "We recommend booking at least 48 hours in advance to ensure availability, especially for our popular studios. Last-minute bookings are possible based on availability."
              },
              {
                question: "What if I need to cancel my reservation?",
                answer: "Cancellations made 24+ hours before your reservation are fully refundable. Cancellations within 24 hours may be subject to a cancellation fee."
              },
              {
                question: "Can I bring guests to my recording session?",
                answer: "Absolutely! Our studios can accommodate various group sizes. Just make sure to select a studio with the appropriate capacity for your needs."
              },
            ].map((faq, index) => (
              <div key={index} className="border-b pb-4">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <MessageSquare size={18} className="text-podcast-primary" />
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-3">Our Location</h3>
              <p className="text-gray-600 mb-4">
                123 Podcast Avenue<br />
                Suite 101<br />
                San Francisco, CA 94103
              </p>
              
              <h3 className="font-bold mb-3">Contact Information</h3>
              <p className="text-gray-600">
                Email: hello@podcastroom.com<br />
                Phone: (555) 123-4567
              </p>
              
              <h3 className="font-bold mt-4 mb-3">Hours of Operation</h3>
              <p className="text-gray-600">
                Monday - Friday: 8:00 AM - 10:00 PM<br />
                Saturday: 9:00 AM - 8:00 PM<br />
                Sunday: 10:00 AM - 6:00 PM
              </p>
            </div>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-podcast-primary focus:border-podcast-primary"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-podcast-primary focus:border-podcast-primary"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-podcast-primary focus:border-podcast-primary"
                  placeholder="Your message"
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-podcast-primary hover:bg-podcast-secondary text-white font-bold py-2 px-4 rounded transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
      
      <footer className="bg-gray-100 py-6 mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-600">
            <p>© 2025 PodcastRoom. All rights reserved.</p>
            <p className="text-sm mt-1">Professional podcast studios for creators.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;
