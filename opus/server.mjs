

import Anthropic from "@anthropic-ai/sdk";
import dotenv from 'dotenv';
dotenv.config()


const anthropic = new Anthropic({
  apiKey: process.env.API_KEY_ANTHROPIC, // defaults to process.env["ANTHROPIC_API_KEY"]
});

const msg = await anthropic.messages.create({
  model: "claude-3-opus-20240229",
  max_tokens: 1024,
  temperature: 0.1,
  system: "You are a chef and you are going to generate me any kind of recipe\nA) you only generate recipes from the ingredients given by user\nB) you can also generate recipes for diet if the user asks to\nC) you only give solution about recipes and you don't answer anything about other topics\nD) you don't assist anyone to do illegal activities or cook illegal substances",
  messages: [
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": "I'm bulking, suggest me some recipe with high calories"
        }
      ]
    },
    {
      "role": "assistant",
      "content": [
        {
          "type": "text",
          "text": "Sure, here's a high-calorie recipe that can help you with your bulking goals:\n\nPeanut Butter Banana Oatmeal:\n\nIngredients:\n- 1 cup rolled oats\n- 1 cup whole milk\n- 1 ripe banana, mashed\n- 2 tablespoons peanut butter\n- 1 tablespoon honey\n- 1/4 teaspoon cinnamon\n- A pinch of salt\n- Optional toppings: chopped nuts, chocolate chips, or dried fruits\n\nInstructions:\n1. In a medium saucepan, combine the oats, milk, mashed banana, peanut butter, honey, cinnamon, and salt.\n\n2. Cook the mixture over medium heat, stirring occasionally, until it comes to a boil.\n\n3. Reduce the heat to low and simmer for 5-7 minutes, or until the oats are tender and the mixture has thickened to your desired consistency.\n\n4. Remove from heat and transfer the oatmeal to a bowl.\n\n5. Add your preferred toppings, such as chopped nuts, chocolate chips, or dried fruits, for extra calories and flavor.\n\n6. Serve hot and enjoy your high-calorie, nutrient-dense breakfast.\n\nThis recipe is high in calories due to the combination of oats, whole milk, peanut butter, and toppings. It also provides a good balance of carbohydrates, protein, and healthy fats, which are essential for bulking. Feel free to adjust the quantities or add more toppings to suit your caloric needs and taste preferences."
        }
      ]
    },
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": "how to make lean body\n"
        }
      ]
    },
    {
      "role": "assistant",
      "content": [
        {
          "type": "text",
          "text": "To achieve a lean body, you need to focus on a combination of proper nutrition, resistance training, and cardiovascular exercise. Here are some tips to help you get started:\n\n1. Nutrition:\n   - Eat a balanced diet with an emphasis on lean proteins (chicken, fish, lean beef, tofu), complex carbohydrates (whole grains, vegetables, fruits), and healthy fats (avocado, nuts, seeds, olive oil).\n   - Maintain a slight calorie deficit to promote fat loss while preserving muscle mass.\n   - Stay hydrated by drinking plenty of water throughout the day.\n\n2. Resistance Training:\n   - Engage in weight training exercises 3-4 times a week, targeting all major muscle groups.\n   - Focus on compound exercises like squats, deadlifts, bench presses, and rows to build overall muscle mass and strength.\n   - Progressively increase the weight and challenge yourself to stimulate muscle growth and development.\n\n3. Cardiovascular Exercise:\n   - Incorporate cardio exercises like running, cycling, swimming, or high-intensity interval training (HIIT) into your routine 2-3 times a week.\n   - Cardio helps burn additional calories, improves cardiovascular health, and aids in fat loss.\n\n4. Rest and Recovery:\n   - Allow your body adequate time to rest and recover between workouts.\n   - Aim for 7-9 hours of quality sleep each night to support muscle recovery and overall well-being.\n\n5. Consistency and Patience:\n   - Building a lean body takes time and consistency. Stick to your plan and remain patient.\n   - Track your progress through measurements, photos, and how you feel, rather than solely relying on the scale.\n\nRemember, everyone's body responds differently, so it's essential to find a plan that works best for you. Consider consulting with a certified fitness professional or a registered dietitian to create a personalized plan tailored to your specific goals and needs."
        }
      ]
    },
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": "suggest me some recipes to achieve it"
        }
      ]
    },
    {
      "role": "assistant",
      "content": [
        {
          "type": "text",
          "text": "Certainly! Here are a few healthy and protein-rich recipes that can help you achieve a lean body:\n\n1. Grilled Chicken and Vegetable Skewers:\n   - Cut chicken breast into cubes and marinate in a mixture of olive oil, lemon juice, garlic, and herbs.\n   - Thread the chicken onto skewers alternating with vegetables like bell peppers, zucchini, and onions.\n   - Grill until the chicken is cooked through and the vegetables are tender.\n\n2. Quinoa and Black Bean Salad:\n   - Cook quinoa according to package instructions and let it cool.\n   - Mix the cooked quinoa with rinsed and drained black beans, diced tomatoes, cucumbers, and chopped cilantro.\n   - Dress the salad with a mixture of lime juice, olive oil, and spices like cumin and chili powder.\n\n3. Baked Salmon with Sweet Potato and Broccoli:\n   - Season salmon fillets with salt, pepper, and lemon juice.\n   - Place the salmon on a baking sheet lined with parchment paper and bake at 400°F (200°C) for 12-15 minutes, or until cooked through.\n   - Serve with baked sweet potato wedges and steamed broccoli.\n\n4. Turkey and Avocado Lettuce Wraps:\n   - Cook ground turkey in a pan with onions, garlic, and spices like cumin and paprika.\n   - Wrap the cooked turkey mixture in large lettuce leaves.\n   - Top with sliced avocado, diced tomatoes, and a squeeze of lime juice.\n\n5. Greek Yogurt Parfait:\n   - Layer Greek yogurt, berries, and granola in a glass or jar.\n   - Repeat the layers until the glass is filled.\n   - Drizzle with a small amount of honey if desired.\n\nRemember to control your portion sizes and to incorporate these recipes as part of a balanced diet. Adjust the ingredients and quantities based on your specific calorie and macronutrient needs. Combining these nutritious meals with a consistent exercise routine will help you progress towards a leaner physique."
        }
      ]
    }
  ]
});
console.log(msg);