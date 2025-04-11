
import React from 'react';
import Navbar from '@/components/Navbar';
import { Headphones, Mic, Radio, Tablet, User, Users, Edit, Package } from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto py-12 px-4">
        <div className="text-center mb-14">
          <h1 className="text-4xl font-bold text-gray-800 mb-3">Our Services</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional podcast production services to help you create amazing content
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Recording Studios */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden transform transition-all hover:shadow-md">
            <div className="h-48 bg-podcast-primary flex items-center justify-center">
              <Mic className="h-20 w-20 text-white" />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">Recording Studios</h2>
              <p className="text-gray-600 mb-4">
                Professional, sound-treated spaces designed specifically for podcast recording
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <Users size={18} className="text-podcast-primary" />
                  <span>Multiple room sizes available</span>
                </li>
                <li className="flex items-center gap-2">
                  <Headphones size={18} className="text-podcast-primary" />
                  <span>Professional equipment included</span>
                </li>
                <li className="flex items-center gap-2">
                  <Radio size={18} className="text-podcast-primary" />
                  <span>Soundproofing and acoustic treatment</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Editing Services */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden transform transition-all hover:shadow-md">
            <div className="h-48 bg-podcast-secondary flex items-center justify-center">
              <Edit className="h-20 w-20 text-white" />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">Audio Editing</h2>
              <p className="text-gray-600 mb-4">
                Professional post-production to make your podcast sound its best
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <Edit size={18} className="text-podcast-primary" />
                  <span>Content editing and arrangement</span>
                </li>
                <li className="flex items-center gap-2">
                  <Radio size={18} className="text-podcast-primary" />
                  <span>Sound quality enhancement</span>
                </li>
                <li className="flex items-center gap-2">
                  <Headphones size={18} className="text-podcast-primary" />
                  <span>Music and sound effects integration</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Distribution */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden transform transition-all hover:shadow-md">
            <div className="h-48 bg-podcast-accent flex items-center justify-center">
              <Package className="h-20 w-20 text-white" />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">Distribution Package</h2>
              <p className="text-gray-600 mb-4">
                Get your podcast on all major platforms and grow your audience
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <Tablet size={18} className="text-podcast-primary" />
                  <span>Distribution to major platforms</span>
                </li>
                <li className="flex items-center gap-2">
                  <Radio size={18} className="text-podcast-primary" />
                  <span>RSS feed setup and management</span>
                </li>
                <li className="flex items-center gap-2">
                  <User size={18} className="text-podcast-primary" />
                  <span>Audience growth strategies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Pricing Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Pricing</h2>
            <p className="text-gray-600">Transparent pricing for all your podcast needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="text-xl font-bold text-center mb-4">Studio Rental</h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-podcast-primary">$45-75</span>
                <span className="text-gray-500">/hour</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-podcast-muted p-1 mt-0.5">
                    <svg className="h-3 w-3 text-podcast-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">Access to recording studio</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-podcast-muted p-1 mt-0.5">
                    <svg className="h-3 w-3 text-podcast-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">Professional equipment</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-podcast-muted p-1 mt-0.5">
                    <svg className="h-3 w-3 text-podcast-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">Audio files provided</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border-2 border-podcast-primary transform scale-105">
              <div className="absolute -top-3 left-0 right-0 flex justify-center">
                <span className="bg-podcast-primary text-white text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</span>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Audio Editing</h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-podcast-primary">$50</span>
                <span className="text-gray-500">/episode</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-podcast-muted p-1 mt-0.5">
                    <svg className="h-3 w-3 text-podcast-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">Professional editing</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-podcast-muted p-1 mt-0.5">
                    <svg className="h-3 w-3 text-podcast-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">Sound enhancement</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-podcast-muted p-1 mt-0.5">
                    <svg className="h-3 w-3 text-podcast-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">Music integration</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-podcast-muted p-1 mt-0.5">
                    <svg className="h-3 w-3 text-podcast-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">Two revision rounds</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border">
              <h3 className="text-xl font-bold text-center mb-4">Distribution</h3>
              <div className="text-center mb-6">
                <span className="text-4xl font-bold text-podcast-primary">$30</span>
                <span className="text-gray-500">/episode</span>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-podcast-muted p-1 mt-0.5">
                    <svg className="h-3 w-3 text-podcast-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">Multi-platform publishing</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-podcast-muted p-1 mt-0.5">
                    <svg className="h-3 w-3 text-podcast-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">Show notes creation</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="rounded-full bg-podcast-muted p-1 mt-0.5">
                    <svg className="h-3 w-3 text-podcast-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-600">SEO optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="bg-gray-100 py-6">
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

export default Services;
