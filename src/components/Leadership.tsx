"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  FaLinkedin, 
  FaTwitter, 
  FaGithub, 
  FaEnvelope,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaAward
} from 'react-icons/fa';

const Leadership = () => {
  const leaders = [
    {
      id: 'sarah-chen',
      name: 'Dr. Sarah Chen',
      title: 'Chief Executive Officer & Founder',
      department: 'Executive Leadership',
      location: 'San Francisco, CA',
      bio: 'Visionary leader with 15+ years in AI and enterprise technology. Former VP of Engineering at Google, leading teams that built scalable AI solutions for millions of users.',
      education: 'PhD Computer Science, Stanford University',
      achievements: ['Forbes 40 Under 40', 'MIT Technology Review Innovator', 'AI Excellence Award 2023'],
      image: '/images/team/sarah-chen.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/sarahchen',
        twitter: 'https://twitter.com/sarahchen',
        email: 'sarah.chen@nayaflow.com'
      },
      expertise: ['Artificial Intelligence', 'Strategic Leadership', 'Product Vision']
    },
    {
      id: 'michael-rodriguez',
      name: 'Michael Rodriguez',
      title: 'Chief Technology Officer',
      department: 'Engineering',
      location: 'Austin, TX',
      bio: 'Technology architect with deep expertise in distributed systems and AI infrastructure. Previously led engineering teams at Microsoft Azure and Amazon Web Services.',
      education: 'MS Computer Engineering, MIT',
      achievements: ['AWS Hero', 'Microsoft MVP', 'Tech Leadership Excellence 2022'],
      image: '/images/team/michael-rodriguez.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/michaelrodriguez',
        github: 'https://github.com/mrodriguez',
        email: 'michael.rodriguez@nayaflow.com'
      },
      expertise: ['Cloud Architecture', 'AI Infrastructure', 'Distributed Systems']
    },
    {
      id: 'alex-thompson',
      name: 'Alex Thompson',
      title: 'Head of AI Research',
      department: 'Research & Development',
      location: 'Boston, MA',
      bio: 'Leading AI researcher specializing in machine learning and natural language processing. Published 50+ papers in top-tier conferences and holds 12 patents in AI technologies.',
      education: 'PhD Machine Learning, Carnegie Mellon',
      achievements: ['AAAI Fellow', 'Best Paper Award ICML 2023', 'AI Research Excellence'],
      image: '/images/team/alex-thompson.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/alexthompson',
        github: 'https://github.com/athompson',
        email: 'alex.thompson@nayaflow.com'
      },
      expertise: ['Machine Learning', 'NLP', 'Research Leadership']
    },
    {
      id: 'priya-patel',
      name: 'Priya Patel',
      title: 'VP of Product Strategy',
      department: 'Product',
      location: 'New York, NY',
      bio: 'Product strategist with expertise in AI-driven solutions and user experience design. Former Product Director at Salesforce, where she led the AI product suite serving 150,000+ customers.',
      education: 'MBA Stanford, BS Computer Science UC Berkeley',
      achievements: ['Product Leader of the Year 2023', 'Women in Tech Award', 'Innovation Excellence'],
      image: '/images/team/priya-patel.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/priyapatel',
        twitter: 'https://twitter.com/priyapatel',
        email: 'priya.patel@nayaflow.com'
      },
      expertise: ['Product Strategy', 'User Experience', 'AI Product Development']
    },
    {
      id: 'david-kim',
      name: 'David Kim',
      title: 'VP of Engineering',
      department: 'Engineering',
      location: 'Seattle, WA',
      bio: 'Engineering leader with 12+ years building scalable software systems. Previously at Netflix, where he architected streaming infrastructure serving 200M+ global users.',
      education: 'MS Software Engineering, University of Washington',
      achievements: ['Engineering Excellence Award', 'Netflix Innovation Award', 'Tech Leadership Recognition'],
      image: '/images/team/david-kim.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/davidkim',
        github: 'https://github.com/dkim',
        email: 'david.kim@nayaflow.com'
      },
      expertise: ['Software Architecture', 'Team Leadership', 'Scalable Systems']
    },
    {
      id: 'lisa-wang',
      name: 'Lisa Wang',
      title: 'Head of Customer Success',
      department: 'Customer Success',
      location: 'Chicago, IL',
      bio: 'Customer success expert focused on driving client satisfaction and business growth. Led customer success teams at HubSpot and Zendesk, achieving 98% customer retention rates.',
      education: 'MBA Northwestern Kellogg, BA Business Administration',
      achievements: ['Customer Success Leader 2023', 'Client Satisfaction Excellence', 'Growth Leadership Award'],
      image: '/images/team/lisa-wang.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/lisawang',
        email: 'lisa.wang@nayaflow.com'
      },
      expertise: ['Customer Success', 'Business Growth', 'Client Relations']
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto px-4 md:px-6 w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Global Leadership
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Meet the visionary leaders driving innovation and excellence at NAYAFlOW. 
            Our diverse team brings decades of experience from leading technology companies worldwide.
          </motion.p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.id}
              className="group bg-white dark:bg-slate-900 rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all duration-300 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5 }}
            >
              {/* Profile Image */}
              <div className="relative h-64 bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                {/* Placeholder for profile image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <span className="text-4xl font-bold text-white">
                      {leader.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                
                {/* Department Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white backdrop-blur-sm">
                    {leader.department}
                  </span>
                </div>

                {/* Location */}
                <div className="absolute top-4 right-4 flex items-center text-white/80">
                  <FaMapMarkerAlt className="w-3 h-3 mr-1" />
                  <span className="text-xs">{leader.location}</span>
                </div>
              </div>

              {/* Profile Content */}
              <div className="p-6">
                {/* Name and Title */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {leader.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                    {leader.title}
                  </p>
                </div>

                {/* Bio */}
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {leader.bio}
                </p>

                {/* Education */}
                <div className="flex items-center mb-3 text-xs text-gray-500 dark:text-gray-400">
                  <FaGraduationCap className="w-3 h-3 mr-2" />
                  <span>{leader.education}</span>
                </div>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {leader.expertise.slice(0, 2).map((skill, i) => (
                    <span key={i} className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                  {leader.expertise.length > 2 && (
                    <span className="inline-block text-gray-500 dark:text-gray-400 text-xs px-2 py-1">
                      +{leader.expertise.length - 2} more
                    </span>
                  )}
                </div>

                {/* Achievements */}
                <div className="mb-4">
                  <div className="flex items-center mb-2">
                    <FaAward className="w-3 h-3 mr-2 text-yellow-500" />
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Recent Recognition</span>
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">
                    {leader.achievements[0]}
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center space-x-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                  {leader.social.linkedin && (
                    <Link
                      href={leader.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-8 h-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors"
                    >
                      <FaLinkedin className="w-4 h-4" />
                    </Link>
                  )}
                  {leader.social.twitter && (
                    <Link
                      href={leader.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-8 h-8 bg-sky-500 hover:bg-sky-600 text-white rounded-full transition-colors"
                    >
                      <FaTwitter className="w-4 h-4" />
                    </Link>
                  )}
                  {leader.social.github && (
                    <Link
                      href={leader.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-8 h-8 bg-gray-800 hover:bg-gray-900 text-white rounded-full transition-colors"
                    >
                      <FaGithub className="w-4 h-4" />
                    </Link>
                  )}
                  {leader.social.email && (
                    <Link
                      href={`mailto:${leader.social.email}`}
                      className="flex items-center justify-center w-8 h-8 bg-green-600 hover:bg-green-700 text-white rounded-full transition-colors"
                    >
                      <FaEnvelope className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
              Join Our World-Class Team
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              We're always looking for exceptional talent to join our mission of transforming businesses through AI and technology. 
              Explore opportunities to work with industry leaders and shape the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="/careers"
                className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Open Positions
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
              <motion.a
                href="/contact"
                className="inline-flex items-center px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg font-semibold transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get in Touch
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;
