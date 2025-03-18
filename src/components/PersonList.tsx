import React, { useState } from 'react';
import './index2.css';

const handlePreviewClick = (videoUrl: string) => {
  window.open(videoUrl, '_blank');
};

const CoursesApp = () => {
  const [activeTab, setActiveTab] = useState('courses');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [codeInput, setCodeInput] = useState('');
  const [executionResult, setExecutionResult] = useState('');

  const teachers = [
    {
      name: "Олександр Петров",
      position: "Senior Frontend Developer",
      experience: "10+ років досвіду",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      specialization: "React, JavaScript, TypeScript"
    },
    {
      name: "Марія Іванова",
      position: "Lead Backend Developer",
      experience: "8 років досвіду",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      specialization: "Python, Node.js, Database Design"
    },
    {
      name: "Андрій Сидоренко",
      position: "DevOps Engineer",
      experience: "6 років досвіду",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      specialization: "Docker, Kubernetes, CI/CD"
    }
  ];  

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const handleImageDoubleClick = (url: string) => {
    window.open(url, '_blank');
  };

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  const handleCodeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCodeInput(event.target.value);
  };
  const filterCourses = (courses) => {
  if (activeFilter === 'all') return courses;
  return courses.filter(course => course.level === activeFilter);
};
  const runCode = () => {
    try {
      const originalLog = console.log;
      console.log = (...args) => {
        setExecutionResult(args.join(' '));
      };

      eval(codeInput);

      console.log = originalLog;
    } catch (error) {
      setExecutionResult(`Помилка виконання: ${error.message}`);
    }
  };

  const renderContent = () => {
    switch (activeTab) {

// Оновіть рендер секції курсів
case 'courses':
  return (
    <div className="tab-content courses">
      <h1 className="courses-title">Наші курси</h1>
      <div className="courses-filter">
        <button 
          className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => setActiveFilter('all')}
        >
          Всі курси
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'beginner' ? 'active' : ''}`}
          onClick={() => setActiveFilter('beginner')}
        >
          Початківцям
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'advanced' ? 'active' : ''}`}
          onClick={() => setActiveFilter('advanced')}
        >
          Просунутим
        </button>
        <button 
          className={`filter-btn ${activeFilter === 'professional' ? 'active' : ''}`}
          onClick={() => setActiveFilter('professional')}
        >4
          Професіоналам
        </button>
      </div>
      <div className="course-list">
        {filterCourses(courses).map((course, index) => (
          <div className="course-card" key={index}>
            <div className="course-image-container">
              <img 
                src={course.image} 
                alt={course.title} 
                onDoubleClick={() => handleImageDoubleClick(course.video)}
              />
<div className="course-overlay">
  <span className="course-level">
    {course.level === 'beginner' && 'Початківець'}
    {course.level === 'advanced' && 'Просунутий'}
    {course.level === 'professional' && 'Професіонал'}
  </span>
  <button 
    className="preview-btn"
    onClick={() => handlePreviewClick(course.video)}
  >
    Переглянути курс
  </button>
</div>
            </div>
            <div className="course-content">
              <h3 className="course-title">{course.title}</h3>
              <div className="course-details">
                <div className="course-stat">
                  <i className="fas fa-clock"></i>
                  <span>{course.duration}</span>
                </div>
                <div className="course-stat">
                  <i className="fas fa-user-graduate"></i>
                  <span>{course.students} учнів</span>
                </div>
              </div>
              <div className="course-footer">
                <span className="course-price">{course.price}</span>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

        case 'about':
          return (
            <div className="tab-content about">
              <div className="about-header">
                <h2 className="animated-title">Про нашу платформу</h2>
                <img 
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSbmDGTUMcASGHY8c66FJiGgAw4ompMLyUyQ&s" 
                  alt="Platform" 
                  className="platform-image"
                />
              </div>
              
              <div className="about-features">
                <div className="feature-card">
                  <i className="fas fa-graduation-cap"></i>
                  <h3>Якісна освіта</h3>
                  <p>Навчайтеся у кращих експертів галузі</p>
                </div>
                
                <div className="feature-card">
                  <i className="fas fa-clock"></i>
                  <h3>Гнучкий графік</h3>
                  <p>Навчайтеся у зручний для вас час</p>
                </div>
                
                <div className="feature-card">
                  <i className="fas fa-users"></i>
                  <h3>Спільнота</h3>
                  <p>Приєднуйтесь до спільноти однодумців</p>
                </div>
              </div>
              
              <div className="about-stats">
                <div className="stat-item">
                  <h4>1000+</h4>
                  <p>Студентів</p>
                </div>
                <div className="stat-item">
                  <h4>50+</h4>
                  <p>Спеціалістів</p>
                </div>
                <div className="stat-item">
                  <h4>95%</h4>
                  <p>Задоволених учнів</p>
                </div>
              </div>
            </div>
          );
          case 'teachers':
            return (
              <div className="tab-content teachers">
                <h2 className="animated-title">Наші викладачі</h2>
                <div className="teachers-grid">
                  {teachers.map((teacher, index) => (
                    <div className="teacher-card" key={index}>
                      <div className="teacher-image">
                        <img src={teacher.image} alt={teacher.name} />
                      </div>
                      <div className="teacher-info">
                        <h3>{teacher.name}</h3>
                        <p className="position">{teacher.position}</p>
                        <p className="experience">{teacher.experience}</p>
                        <div className="specialization">
                          <h4>Спеціалізація:</h4>
                          <p>{teacher.specialization}</p>
                        </div>
                        <button className="contact-button">
                          Зв'язатися
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="join-team">
                  <h3>Хочете стати викладачем?</h3>
                  <p>Ми завжди раді талановитим спеціалістам у нашій команді</p>
                  <button className="join-button">Приєднатися до команди</button>
                </div>
              </div>
            );
      case 'test':
        return (
          <div className="tab-content test">
            <div className="test-container">
              <div className="code-input">
                <textarea 
                  value={codeInput} 
                  onChange={handleCodeChange} 
                  placeholder="Введіть код JavaScript..." 
                />
                <button className="run-button" onClick={runCode}>Запустити</button>
              </div>
              <div className="result-output">
                <h3>Результат виконання:</h3>
                <pre>{executionResult}</pre>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const [activeFilter, setActiveFilter] = useState('all');
  
  // Оновіть масив курсів, додавши поле level
  const courses = [
    {
      title: "Веб-розробка з нуля",
      description: "Основи HTML, CSS та JavaScript для створення сайтів.",
      image: "https://foxminded.ua/wp-content/uploads/2023/09/must-know-web-dev.jpg",
      video: "https://youtu.be/XPwNu44cM6A?si=BX_ZIYQ2VivxNewn",
      level: "beginner",
      duration: "3 місяці",
      students: 1234,
      price: "Безкоштовно"
    },
    {
      title: "React для початківців",
      description: "Вивчення основ React.js",
      image: "https://siluette.com.ua/wp-content/uploads/2021/09/krs-80-2.jpg",
      video: "https://youtu.be/E4BTZJSesIU?si=BM4oOYoDGHHhqadM",
      level: "beginner",
      duration: "2 місяці",
      students: 890,
      price: "Безкоштовно"
    },
    {
      title: "Advanced JavaScript",
      description: "Поглиблене вивчення JavaScript",
      image: "https://itstolytsa.ua/images/08-it-cources/programming/variant01_nashy-kursy_programing_javascript-osnovy.jpg",
      video: "https://youtu.be/FrUynyijdSI?si=NeQ2xbiRvWGfvmuG",
      level: "advanced",
      duration: "4 місяці",
      students: 567,
      price: "$49.99"
    },
    {
      title: "Архітектура ПЗ",
      description: "Професійне проектування додатків",
      image: "https://foxminded.ua/wp-content/uploads/2024/03/architektura-prilozheniya-1024x566.jpg",
      video: "https://youtu.be/1qf3mscqipg?si=_3gvaaEbTRYOTGNT",
      level: "professional",
      duration: "6 місяців",
      students: 234,
      price: "$99.99"
    }
    // Додайте інші курси з відповідними рівнями
  ];

  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="tab-menu">
        <button
          className={activeTab === 'courses' ? 'active' : ''}
          onClick={() => handleTabClick('courses')}
        >
          Курси
        </button>
        <button
          className={activeTab === 'about' ? 'active' : ''}
          onClick={() => handleTabClick('about')}
        >
          Про нас
        </button>
        <button
          className={activeTab === 'teachers' ? 'active' : ''}
          onClick={() => handleTabClick('teachers')}
        >
          Викладачі
        </button>
        <button
          className={activeTab === 'test' ? 'active' : ''}
          onClick={() => handleTabClick('test')}
        >
          Тестування
        </button>
      </div>

      {renderContent()}

      <div className="toggle-theme" onClick={toggleTheme}>
        <div className={`toggle-circle ${isDarkMode ? 'active' : ''}`}></div>
      </div>
    </div>
  );
};

export default CoursesApp;
