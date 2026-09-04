import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

export const generateBrandStrategy = async (businessName: string, website: string, outcomes: string[]) => {
  const model = "gemini-3-flash-preview";
  const prompt = `
    You are a senior creative director at Nustudios, a high-end AI-driven creative agency.
    Analyze the following business and provide a concise, high-impact creative strategy.
    
    Business Name: ${businessName}
    Website: ${website}
    Desired Outcomes: ${outcomes.join(', ')}
    
    Provide your response in the following JSON format:
    {
      "tagline": "A powerful 3-5 word tagline",
      "vision": "A 1-sentence visionary statement",
      "aiPotential": "How AI can specifically transform their content production (2 sentences)",
      "strategySteps": [
        "Step 1: Description",
        "Step 2: Description",
        "Step 3: Description"
      ]
    }
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: [{ parts: [{ text: prompt }] }],
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            tagline: { type: Type.STRING },
            vision: { type: Type.STRING },
            aiPotential: { type: Type.STRING },
            strategySteps: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["tagline", "vision", "aiPotential", "strategySteps"]
        }
      }
    });

    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Error generating brand strategy:", error);
    throw error;
  }
};

export const runDNAScan = async (urlOrHandle: string) => {
  const model = "gemini-3-flash-preview";
  const prompt = `
    You are the Lead Vision Architect at STUDIO ai. Your primary objective is to execute the "Strategic DNA Scan"—a lead-generation module that proves our "Additions, Not Corrections" philosophy by showing a user their own brand elevated through a 3-stage visual pipeline.

    1. THE AUDIT TRIGGER
    When a user provides a URL or Social Handle, you must immediately shift into Audit Mode:
    Step 1 (Grounding): Use Google Search to identify the brand, their niche, and their specific "Hero Product."
    Step 2 (DNA Extraction): Identify the visual elements they are proud of (lighting, texture, mood).
    Step 3 (Status Check): Determine their "Growth Phase" (e.g., Established Niche Leader).

    2. THE TRANSFORMATION PIPELINE (THE VALUE-ADD)
    You must formulate a 3-stage visual evolution description. Use high-end, editorial terminology:
    STAGE 01: E-COMMERCE BASELINE (The Anchor)
    Describe a high-fidelity, clean studio shot of their hero product.
    Focus: Sharpness, minimalist white or neutral background, technical perfection. This represents their current "Identity Anchor."

    STAGE 02: LIFESTYLE ELEVATION (The Momentum)
    Describe how our HITL engine places that product into a cinematic editorial setting.
    Focus: Narrative lighting (e.g., "golden hour architectural shadows"), luxury materials, and human-guided art direction. Show how the product "lives" in a world-class environment.

    STAGE 03: NARRATIVE VIDEO (The Scale)
    Describe a 15-60 second "Scale Reel" or TikTok blueprint.
    Focus: Dynamic motion (e.g., "macro texture zooms to wide architectural pan"), rhythmic cuts, and a specific narrative hook that amplifies their brand soul.

    3. SCORING & INSIGHTS
    Equity Score: 80% to 97% (Reflecting current excellence vs. scale potential).
    Opportunities: 3 specific "Scale Leaks" where production velocity is currently capping their market reach.
    The "Lock" Recommendation: One sentence on why anchoring this look into the machine via the $500 Identity Lock is the only way to scale without drift.

    4. TONE & RESPONSE FORMAT
    Tone: Professional, Visionary, High-End Creative Director.
    Formatting: You MUST output your final analysis in a valid JSON block so the UI can render the visual cards.

    MANDATORY JSON SCHEMA:
    {
      "brand_identity": {
        "name": "Brand Name",
        "equity_score": 92,
        "status": "Established Niche Leader"
      },
      "visual_pipeline": {
        "stage_1_ecomm": "Detailed visual description of studio shot",
        "stage_2_lifestyle": "Detailed visual description of editorial scene",
        "stage_3_video": "Description of the narrative video storyboard"
      },
      "strategic_wins": [
        "Opportunity 1",
        "Opportunity 2",
        "Opportunity 3"
      ],
      "hitl_recommendation": "Strategic closing statement"
    }

    User Input: ${urlOrHandle}
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: [{ parts: [{ text: prompt }] }],
      config: {
        tools: [{ googleSearch: {} }],
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            brand_identity: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                equity_score: { type: Type.NUMBER },
                status: { type: Type.STRING }
              },
              required: ["name", "equity_score", "status"]
            },
            visual_pipeline: {
              type: Type.OBJECT,
              properties: {
                stage_1_ecomm: { type: Type.STRING },
                stage_2_lifestyle: { type: Type.STRING },
                stage_3_video: { type: Type.STRING }
              },
              required: ["stage_1_ecomm", "stage_2_lifestyle", "stage_3_video"]
            },
            strategic_wins: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            hitl_recommendation: { type: Type.STRING }
          },
          required: ["brand_identity", "visual_pipeline", "strategic_wins", "hitl_recommendation"]
        }
      }
    });

    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Error running DNA scan:", error);
    throw error;
  }
};
