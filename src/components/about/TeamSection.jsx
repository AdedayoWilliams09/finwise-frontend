// FILE: frontend/src/components/about/TeamSection.jsx
// PURPOSE: Team members grid with dynamic data

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiLinkedin, FiTwitter, FiUser } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeamMembers } from '../../store/aboutSlice';
import Loader from '../common/Loader';
import Container from '../common/Container';

/**
 *  Child Explanation:
 * This shows the people who built Finwise.
 * Each team member has a photo, name, job title, and social links.
 * 
 *  Technical Explanation:
 * Team section that fetches data from the backend.
 * Displays team member cards with photos and social links.
 * Uses Redux for state management.
 */

const TeamSection = () => {
  const dispatch = useDispatch();
  const { teamMembers, isLoading, error } = useSelector((state) => state.about);
  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    dispatch(fetchTeamMembers());
  }, [dispatch]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-white dark:bg-gray-950">
        <Container>
          <div className="flex justify-center py-12">
            <Loader size="lg" />
          </div>
        </Container>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-white dark:bg-gray-950">
        <Container>
          <div className="text-center py-12">
            <p className="text-red-500">Failed to load team members. Please try again.</p>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <Container>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
            Meet the Team
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            The passionate people behind Finwise who are dedicated to helping you achieve financial freedom.
          </p>
        </div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member._id}
              variants={itemVariants}
              className="
                p-6 rounded-xl text-center
                bg-gray-50 dark:bg-gray-900
                border border-gray-200 dark:border-gray-800
                hover:shadow-lg hover:border-primary/20
                transition-all duration-300
                group
              "
            >
              {/* Photo */}
              <div className="relative w-32 h-32 mx-auto mb-4">
                <img
                  src={member.photoUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=128&background=4F46E5&color=fff`}
                  alt={member.name}
                  className="w-full h-full rounded-full object-cover border-4 border-primary/20 group-hover:border-primary/50 transition-all duration-300"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&size=128&background=4F46E5&color=fff`;
                  }}
                />
              </div>

              {/* Name */}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {member.name}
              </h3>

              {/* Role */}
              <p className="text-sm text-primary font-medium mt-1">
                {member.role}
              </p>

              {/* Bio */}
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 line-clamp-3">
                {member.bio}
              </p>

              {/* Social Links */}
              <div className="flex justify-center gap-3 mt-4">
                {member.socialLinks?.linkedin && (
                  <a                    href={member.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      p-2 rounded-lg
                      text-gray-600 hover:text-primary
                      dark:text-gray-400 dark:hover:text-primary-light
                      hover:bg-gray-200 dark:hover:bg-gray-800
                      transition-all duration-200
                      min-h-[44px] min-w-[44px]
                      flex items-center justify-center
                    "
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <FiLinkedin className="w-5 h-5" />
                  </a>
                )}
                {member.socialLinks?.twitter && (
                  <a
                    href={member.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      p-2 rounded-lg
                      text-gray-600 hover:text-primary
                      dark:text-gray-400 dark:hover:text-primary-light
                      hover:bg-gray-200 dark:hover:bg-gray-800
                      transition-all duration-200
                      min-h-[44px] min-w-[44px]
                      flex items-center justify-center
                    "
                    aria-label={`${member.name}'s Twitter`}
                  >
                    <FiTwitter className="w-5 h-5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default TeamSection;