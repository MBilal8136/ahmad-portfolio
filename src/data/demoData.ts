export const dietPlans = [
  {
    id: 1,
    title: "Weight Loss Program",
    description: "A comprehensive 12-week program designed to help you lose weight safely and sustainably.",
    duration: "12 weeks",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop&crop=center",
    tags: ["Weight Loss", "Healthy Eating", "Exercise"],
    nutritionFacts: {
      calories: "1200-1500",
      protein: "80-100g",
      carbs: "120-150g",
      fat: "40-60g"
    },
    features: [
      "Personalized meal plans",
      "Weekly check-ins",
      "Exercise recommendations",
      "Progress tracking",
      "Recipe collection"
    ],
    recipes: [
      {
        name: "Green Smoothie Bowl",
        ingredients: ["Spinach", "Banana", "Almond milk", "Chia seeds"],
        instructions: "Blend all ingredients until smooth. Top with fresh berries."
      },
      {
        name: "Grilled Chicken Salad",
        ingredients: ["Chicken breast", "Mixed greens", "Cherry tomatoes", "Avocado"],
        instructions: "Grill chicken, slice, and serve over mixed greens with dressing."
      }
    ]
  },
  {
    id: 2,
    title: "Muscle Building Diet",
    description: "High-protein nutrition plan to support muscle growth and recovery.",
    duration: "8 weeks",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center",
    tags: ["Muscle Building", "High Protein", "Recovery"],
    nutritionFacts: {
      calories: "2000-2500",
      protein: "150-180g",
      carbs: "200-250g",
      fat: "60-80g"
    },
    features: [
      "High-protein meal plans",
      "Pre/post workout nutrition",
      "Supplement guidance",
      "Recovery protocols",
      "Progress monitoring"
    ],
    recipes: [
      {
        name: "Protein Power Bowl",
        ingredients: ["Quinoa", "Grilled chicken", "Black beans", "Sweet potato"],
        instructions: "Cook quinoa, grill chicken, roast sweet potato, combine and serve."
      }
    ]
  },
  {
    id: 3,
    title: "Diabetes Management",
    description: "Blood sugar-friendly meal plans and lifestyle guidance for diabetes management.",
    duration: "16 weeks",
    image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=800&h=600&fit=crop&crop=center",
    tags: ["Diabetes", "Blood Sugar", "Low Carb"],
    nutritionFacts: {
      calories: "1400-1800",
      protein: "70-90g",
      carbs: "100-130g",
      fat: "50-70g"
    },
    features: [
      "Blood sugar monitoring",
      "Low-carb meal plans",
      "Portion control guidance",
      "Regular check-ins",
      "Educational resources"
    ],
    recipes: [
      {
        name: "Cauliflower Rice Bowl",
        ingredients: ["Cauliflower", "Grilled fish", "Broccoli", "Olive oil"],
        instructions: "Rice cauliflower, grill fish, steam broccoli, combine with olive oil."
      }
    ]
  },
  {
    id: 4,
    title: "Pregnancy Nutrition",
    description: "Specialized nutrition plan to support healthy pregnancy and baby development.",
    duration: "40 weeks",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=600&fit=crop&crop=center",
    tags: ["Pregnancy", "Prenatal", "Healthy Baby"],
    nutritionFacts: {
      calories: "1800-2200",
      protein: "80-100g",
      carbs: "180-220g",
      fat: "60-80g"
    },
    features: [
      "Trimester-specific plans",
      "Folic acid guidance",
      "Iron-rich meals",
      "Prenatal supplements",
      "Regular monitoring"
    ],
    recipes: [
      {
        name: "Prenatal Power Smoothie",
        ingredients: ["Greek yogurt", "Berries", "Spinach", "Flax seeds"],
        instructions: "Blend all ingredients until smooth and creamy."
      }
    ]
  },
  {
    id: 5,
    title: "Heart Health Program",
    description: "Cardiovascular-focused nutrition plan to support heart health and reduce risk factors.",
    duration: "12 weeks",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&crop=center",
    tags: ["Heart Health", "Cardiovascular", "Low Sodium"],
    nutritionFacts: {
      calories: "1500-1800",
      protein: "70-90g",
      carbs: "150-180g",
      fat: "40-60g"
    },
    features: [
      "Low-sodium meal plans",
      "Heart-healthy fats",
      "Fiber-rich foods",
      "Blood pressure monitoring",
      "Exercise integration"
    ],
    recipes: [
      {
        name: "Mediterranean Salmon Bowl",
        ingredients: ["Salmon", "Quinoa", "Olive oil", "Lemon", "Herbs"],
        instructions: "Bake salmon with herbs, cook quinoa, drizzle with olive oil and lemon."
      }
    ]
  },
  {
    id: 6,
    title: "PCOS Management Plan",
    description: "Specialized nutrition approach to manage PCOS symptoms and improve hormonal balance.",
    duration: "16 weeks",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop&crop=center",
    tags: ["PCOS", "Hormonal Balance", "Insulin Resistance"],
    nutritionFacts: {
      calories: "1400-1700",
      protein: "80-100g",
      carbs: "120-150g",
      fat: "50-70g"
    },
    features: [
      "Low-glycemic foods",
      "Anti-inflammatory meals",
      "Hormone-balancing nutrients",
      "Regular monitoring",
      "Lifestyle modifications"
    ],
    recipes: [
      {
        name: "PCOS Power Bowl",
        ingredients: ["Brown rice", "Grilled chicken", "Avocado", "Leafy greens"],
        instructions: "Cook brown rice, grill chicken, combine with fresh vegetables and avocado."
      }
    ]
  },
  {
    id: 7,
    title: "Thyroid Support Diet",
    description: "Nutrition plan designed to support thyroid function and manage thyroid conditions.",
    duration: "12 weeks",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=600&fit=crop&crop=center",
    tags: ["Thyroid", "Metabolism", "Iodine"],
    nutritionFacts: {
      calories: "1600-1900",
      protein: "75-95g",
      carbs: "160-190g",
      fat: "55-75g"
    },
    features: [
      "Iodine-rich foods",
      "Selenium sources",
      "Metabolism support",
      "Thyroid monitoring",
      "Energy optimization"
    ],
    recipes: [
      {
        name: "Thyroid Support Smoothie",
        ingredients: ["Brazil nuts", "Seaweed", "Berries", "Coconut milk"],
        instructions: "Blend all ingredients until smooth and creamy."
      }
    ]
  },
  {
    id: 8,
    title: "Gut Health Program",
    description: "Comprehensive plan to improve digestive health and support gut microbiome.",
    duration: "8 weeks",
    image: "https://images.unsplash.com/photo-1546554137-f86b9593a222?w=800&h=600&fit=crop&crop=center",
    tags: ["Gut Health", "Digestive", "Probiotics"],
    nutritionFacts: {
      calories: "1500-1800",
      protein: "70-90g",
      carbs: "140-170g",
      fat: "50-70g"
    },
    features: [
      "Probiotic-rich foods",
      "Prebiotic sources",
      "Anti-inflammatory meals",
      "Digestive support",
      "Microbiome optimization"
    ],
    recipes: [
      {
        name: "Gut-Healing Soup",
        ingredients: ["Bone broth", "Ginger", "Turmeric", "Vegetables"],
        instructions: "Simmer bone broth with ginger, turmeric, and vegetables until tender."
      }
    ]
  },
  {
    id: 9,
    title: "Sports Performance Plan",
    description: "High-performance nutrition strategy for athletes and active individuals.",
    duration: "10 weeks",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center",
    tags: ["Sports", "Performance", "Recovery"],
    nutritionFacts: {
      calories: "2200-2800",
      protein: "120-150g",
      carbs: "250-300g",
      fat: "70-90g"
    },
    features: [
      "Pre/post workout nutrition",
      "Hydration strategies",
      "Recovery protocols",
      "Performance optimization",
      "Competition preparation"
    ],
    recipes: [
      {
        name: "Performance Power Bowl",
        ingredients: ["Sweet potato", "Grilled chicken", "Quinoa", "Vegetables"],
        instructions: "Roast sweet potato, grill chicken, cook quinoa, combine with fresh vegetables."
      }
    ]
  },
  {
    id: 10,
    title: "Anti-Inflammatory Diet",
    description: "Nutrition plan focused on reducing inflammation and supporting overall wellness.",
    duration: "12 weeks",
    image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=800&h=600&fit=crop&crop=center",
    tags: ["Anti-Inflammatory", "Wellness", "Omega-3"],
    nutritionFacts: {
      calories: "1600-1900",
      protein: "75-95g",
      carbs: "150-180g",
      fat: "60-80g"
    },
    features: [
      "Omega-3 rich foods",
      "Antioxidant sources",
      "Inflammation reduction",
      "Joint health support",
      "Wellness monitoring"
    ],
    recipes: [
      {
        name: "Anti-Inflammatory Smoothie",
        ingredients: ["Turmeric", "Ginger", "Berries", "Flax seeds"],
        instructions: "Blend all ingredients with coconut milk until smooth."
      }
    ]
  },
  {
    id: 11,
    title: "Pediatric Nutrition Plan",
    description: "Healthy eating program designed for children and teenagers.",
    duration: "16 weeks",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&h=600&fit=crop&crop=center",
    tags: ["Pediatric", "Children", "Growth"],
    nutritionFacts: {
      calories: "1200-1800",
      protein: "50-80g",
      carbs: "150-200g",
      fat: "40-60g"
    },
    features: [
      "Age-appropriate portions",
      "Growth support",
      "Healthy habits",
      "Family involvement",
      "Fun meal ideas"
    ],
    recipes: [
      {
        name: "Kids Power Smoothie",
        ingredients: ["Banana", "Milk", "Honey", "Berries"],
        instructions: "Blend all ingredients until smooth and creamy."
      }
    ]
  },
  {
    id: 12,
    title: "Senior Wellness Program",
    description: "Specialized nutrition plan for seniors to support healthy aging and vitality.",
    duration: "20 weeks",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&crop=center",
    tags: ["Senior", "Aging", "Vitality"],
    nutritionFacts: {
      calories: "1400-1700",
      protein: "70-90g",
      carbs: "140-170g",
      fat: "50-70g"
    },
    features: [
      "Bone health support",
      "Cognitive function",
      "Digestive comfort",
      "Medication interactions",
      "Regular monitoring"
    ],
    recipes: [
      {
        name: "Senior Wellness Bowl",
        ingredients: ["Soft vegetables", "Lean protein", "Whole grains", "Healthy fats"],
        instructions: "Prepare soft, easy-to-digest foods and combine in a nourishing bowl."
      }
    ]
  }
];

export const blogPosts = [
  {
    id: 1,
    title: "10 Superfoods for Better Health",
    excerpt: "Discover the top 10 superfoods that can boost your immune system and improve your overall health.",
    content: "Superfoods are nutrient-rich foods that are considered to be especially beneficial for health and well-being...",
    author: "Fiza",
    date: "2024-01-15",
    category: "Nutrition",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=600&fit=crop&crop=center",
    readTime: "5 min read",
    tags: ["Superfoods", "Health", "Nutrition"]
  },
  {
    id: 2,
    title: "Understanding Macronutrients",
    excerpt: "Learn about proteins, carbohydrates, and fats and how they affect your body.",
    content: "Macronutrients are the nutrients that provide calories or energy. They are needed in large amounts...",
    author: "Fiza",
    date: "2024-01-10",
    category: "Education",
    image: "https://images.unsplash.com/photo-1546554137-f86b9593a222?w=800&h=600&fit=crop&crop=center",
    readTime: "7 min read",
    tags: ["Macronutrients", "Education", "Basics"]
  },
  {
    id: 3,
    title: "Meal Prep Tips for Busy Professionals",
    excerpt: "Simple strategies to prepare healthy meals ahead of time and save time during the week.",
    content: "Meal prepping is one of the most effective ways to maintain a healthy diet when you're busy...",
    author: "Fiza",
    date: "2024-01-05",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop&crop=center",
    readTime: "6 min read",
    tags: ["Meal Prep", "Lifestyle", "Time Management"]
  },
  {
    id: 4,
    title: "The Truth About Intermittent Fasting",
    excerpt: "Exploring the benefits and potential risks of intermittent fasting for weight management.",
    content: "Intermittent fasting has gained popularity as a weight management strategy...",
    author: "Fiza",
    date: "2024-01-01",
    category: "Weight Loss",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center",
    readTime: "8 min read",
    tags: ["Intermittent Fasting", "Weight Loss", "Research"]
  },
  {
    id: 5,
    title: "Hydration: The Key to Optimal Health",
    excerpt: "Learn why proper hydration is crucial for your health and how much water you really need.",
    content: "Water is essential for life and plays a crucial role in maintaining optimal health...",
    author: "Fiza",
    date: "2023-12-28",
    category: "Health",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop&crop=center",
    readTime: "6 min read",
    tags: ["Hydration", "Water", "Health"]
  },
  {
    id: 6,
    title: "Plant-Based Nutrition for Beginners",
    excerpt: "A comprehensive guide to starting a plant-based diet with practical tips and meal ideas.",
    content: "Plant-based nutrition focuses on foods primarily from plants including vegetables, fruits...",
    author: "Fiza",
    date: "2023-12-25",
    category: "Nutrition",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop&crop=center",
    readTime: "9 min read",
    tags: ["Plant-Based", "Vegetarian", "Nutrition"]
  },
  {
    id: 7,
    title: "Managing Diabetes Through Diet",
    excerpt: "Essential dietary strategies for managing blood sugar levels and living well with diabetes.",
    content: "Diet plays a crucial role in managing diabetes and maintaining stable blood sugar levels...",
    author: "Fiza",
    date: "2023-12-20",
    category: "Health Conditions",
    image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=800&h=600&fit=crop&crop=center",
    readTime: "10 min read",
    tags: ["Diabetes", "Blood Sugar", "Health Management"]
  },
  {
    id: 8,
    title: "The Science of Metabolism",
    excerpt: "Understanding how your metabolism works and ways to boost it naturally.",
    content: "Metabolism refers to all the chemical processes that occur within your body to maintain life...",
    author: "Fiza",
    date: "2023-12-15",
    category: "Science",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center",
    readTime: "7 min read",
    tags: ["Metabolism", "Science", "Weight Management"]
  },
  {
    id: 9,
    title: "Healthy Snacking for Weight Loss",
    excerpt: "Smart snacking strategies that support your weight loss goals without derailing your progress.",
    content: "Snacking can be a powerful tool for weight loss when done strategically...",
    author: "Fiza",
    date: "2023-12-10",
    category: "Weight Loss",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=600&fit=crop&crop=center",
    readTime: "5 min read",
    tags: ["Snacking", "Weight Loss", "Healthy Eating"]
  },
  {
    id: 10,
    title: "Gut Health and Nutrition",
    excerpt: "Discover how your gut microbiome affects your overall health and what foods support it.",
    content: "Your gut microbiome consists of trillions of microorganisms that play a vital role...",
    author: "Fiza",
    date: "2023-12-05",
    category: "Health",
    image: "https://images.unsplash.com/photo-1546554137-f86b9593a222?w=800&h=600&fit=crop&crop=center",
    readTime: "8 min read",
    tags: ["Gut Health", "Microbiome", "Digestive Health"]
  },
  {
    id: 11,
    title: "Sports Nutrition for Athletes",
    excerpt: "Fuel your performance with the right nutrition strategies for training and competition.",
    content: "Proper nutrition is essential for athletic performance and recovery...",
    author: "Fiza",
    date: "2023-11-30",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center",
    readTime: "9 min read",
    tags: ["Sports Nutrition", "Athletes", "Performance"]
  },
  {
    id: 12,
    title: "Mindful Eating: A Path to Better Health",
    excerpt: "Learn how mindful eating can transform your relationship with food and improve your health.",
    content: "Mindful eating is about paying full attention to the experience of eating and drinking...",
    author: "Fiza",
    date: "2023-11-25",
    category: "Lifestyle",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop&crop=center",
    readTime: "6 min read",
    tags: ["Mindful Eating", "Lifestyle", "Mental Health"]
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Aisha Ahmed",
    role: "Weight Loss Success",
    content: "Fiza ka weight loss program bilkul amazing hai! Maine 12 weeks mein 30 pounds lose kiye aur ab main bohot energetic feel karti hun. Unka guidance aur meal plans follow karna bohot easy tha.",
    rating: 5,
    image: "/images/testimonial1.jpg"
  },
  
  {
    id: 2,
    name: "Fatima Khan",
    role: "Diabetes Management",
    content: "Diabetes manage karna pehle bohot mushkil tha, lekin Fiza ki guidance ke baad sab kuch easy ho gaya. Ab mere blood sugar levels stable hain aur main healthy feel karti hun.",
    rating: 5,
    image: "/images/testimonial3.jpg"
  },
  
 
  {
    id: 3,
    name: "Omar Farooq",
    role: "General Health",
    content: "Fiza ka approach bilkul different hai. Unhone sirf diet nahi di, balki lifestyle change karne mein help ki. Ab main healthy habits follow karta hun aur feel bhi bohot better hai.",
    rating: 5,
    image: "/images/testimonial6.jpg"
  }
];

export const services = [
  {
    title: "Weight Management",
    description: "Personalized plans for healthy weight loss or gain",
    icon: "🏃‍♀️"
  },
  {
    title: "Sports Nutrition",
    description: "Performance-focused nutrition for athletes",
    icon: "🏆"
  },
  {
    title: "Diabetes Care",
    description: "Blood sugar management and lifestyle guidance",
    icon: "🍎"
  },
  {
    title: "Pregnancy Nutrition",
    description: "Specialized care for expecting mothers",
    icon: "👶"
  },
  {
    title: "Heart Health Nutrition",
    description: "Cardiovascular health through proper nutrition",
    icon: "❤️"
  },
  {
    title: "Pediatric Nutrition",
    description: "Healthy eating habits for children and teens",
    icon: "🧒"
  },
  {
    title: "Geriatric Nutrition",
    description: "Specialized nutrition for seniors and elderly",
    icon: "👴"
  },
  {
    title: "Eating Disorders Recovery",
    description: "Support and guidance for eating disorder recovery",
    icon: "🦋"
  },
  {
    title: "Food Allergies & Intolerances",
    description: "Managing dietary restrictions and allergies",
    icon: "🚫"
  },
  {
    title: "Gut Health & Digestive Wellness",
    description: "Improving digestive health through nutrition",
    icon: "🦠"
  },
  {
    title: "Hormonal Balance & PCOS",
    description: "Nutrition support for hormonal health",
    icon: "⚖️"
  },
  {
    title: "Thyroid Health & Nutrition",
    description: "Dietary support for thyroid conditions",
    icon: "🦋"
  },
  {
    title: "Immune System Support",
    description: "Boosting immunity through proper nutrition",
    icon: "🛡️"
  },
  {
    title: "General Wellness & Lifestyle",
    description: "Comprehensive health and lifestyle guidance",
    icon: "🌟"
  },
  {
    title: "Meal Planning & Prep",
    description: "Custom meal plans and preparation strategies",
    icon: "🍽️"
  },
  {
    title: "Nutrition Education",
    description: "Learning about healthy eating and nutrition science",
    icon: "📚"
  }
];
