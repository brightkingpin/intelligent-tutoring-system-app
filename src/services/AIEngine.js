class AIEngine {
    constructor() {
      // Mock data for personalized recommendations
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
  