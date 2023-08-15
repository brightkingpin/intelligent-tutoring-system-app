// services/AIEngine.js
class AIEngine {
  constructor() {
    this.recommendations = {
      math: ['Algebra', 'Geometry', 'Calculus'],
      science: ['Physics', 'Chemistry', 'Biology'],
      history: ['Ancient Civilizations', 'World Wars', 'Modern History'],
    };
  }

  getRecommendations(subject) {
    return this.recommendations[subject] || [];
  }
}

export default AIEngine;
