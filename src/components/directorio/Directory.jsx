import React, { useState } from 'react';
import { directory } from '../../constants/directory';
import { directoryCategories } from '../../constants/directoryCategories';
import DirectoryCard from './DirectoryCard';

const Directory = () => {
  const [activeCategory, setActiveCategory] = useState('directivos');

  const filteredDirectory = directory.filter(person => {
    const category = directoryCategories.find(cat => cat.id === activeCategory);
    return category?.positions.includes(person.position);
  });

  return (
    <section className="section-main" id="acerca-de">
      <div className="container mt-11">
        <div className="inner-wrapper about-experts">
          <div className="section-header content-align-center">
            <div className="margin-bottom margin-12px">
              <div className="section-header-subheading background-gradient">
                Nuestros equipo
              </div>
            </div>
            <h2 className="section-header-heading">
              Conoce nuestro directorio del plantel
            </h2>
          </div>

          {/* Category Filters */}
          <div className="flex justify-center gap-4 mb-8">
            {directoryCategories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`tab-navigation-link w-inline-block ${
                  activeCategory === category.id ? 'w--current' : ''
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Directory Cards */}
          <div className="section-content about-experts">
            <div className="w-dyn-list">
              <div role="list" className="about-experts-collection-list w-dyn-items grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDirectory.map((person) => (
                  <DirectoryCard
                    key={person.href}
                    name={person.name}
                    title={person.title}
                    position={person.position}
                    href={person.href}
                    image={person.image}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Directory;
