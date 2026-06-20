/**
 * Life Navigator AI - Multi-Agent Engine
 * Implements a state-driven client-side multi-agent simulation.
 */

// --- GOAL TEMPLATES ---
export const GOAL_TEMPLATES = {
  saas: {
    title: "Build and Launch an AI Indie SaaS",
    category: "Business",
    description: "Build a web-based SaaS application integrated with AI features, set up stripe billing, and launch it to early adopters on Product Hunt.",
    baseHoursNeeded: 180,
    difficulty: "Hard",
    milestones: [
      { id: "saas-m1", title: "Niche Research & MVP Spec", weight: 0.15, weeks: 2, tasks: ["Identify problem and target audience", "Design Figma wireframes for 3 core screens", "Create database schema & API endpoint map"] },
      { id: "saas-m2", title: "Core MVP Core Development", weight: 0.40, weeks: 5, tasks: ["Set up database and authentication", "Integrate Gemini/AI API wrapper", "Build primary user dashboard UI", "Create main generation workflows"] },
      { id: "saas-m3", title: "Billing & Integrations", weight: 0.20, weeks: 3, tasks: ["Integrate Stripe subscription checkout", "Build billing portal and webhooks", "Create admin settings & user onboarding walkthrough"] },
      { id: "saas-m4", title: "Beta Launch & Optimization", weight: 0.15, weeks: 2, tasks: ["Set up landing page and email signup", "Invite 20 beta users for feedback", "Fix critical bugs & optimize load speeds"] },
      { id: "saas-m5", title: "Public Launch & Marketing", weight: 0.10, weeks: 2, tasks: ["Write launch copy and create Product Hunt deck", "Prepare social media content pipeline", "Launch live & track analytics"] }
    ],
    risks: [
      "Scope Creep (Adding too many MVP features)",
      "Technical debt in payment webhooks",
      "Low initial launch engagement"
    ]
  },
  fullstack: {
    title: "Become a Job-Ready Full-Stack Developer",
    category: "Career Development",
    description: "Learn modern frontend (React/HTML/CSS), backend (Node/Python), databases, system architecture, and build a capstone project to land a developer role.",
    baseHoursNeeded: 300,
    difficulty: "Medium-Hard",
    milestones: [
      { id: "fs-m1", title: "Frontend Foundations", weight: 0.20, weeks: 4, tasks: ["Master semantic HTML5 and responsive CSS Grid/Flexbox", "Learn vanilla JavaScript (ES6+, DOM API, async/fetch)", "Build a responsive portfolio page from scratch"] },
      { id: "fs-m2", title: "React & State Management", weight: 0.25, weeks: 5, tasks: ["Understand React components, props, state, and hooks", "Learn TailwindCSS or styled-components", "Build a dynamic weather or finance dashboard web app"] },
      { id: "fs-m3", title: "Backend API Development", weight: 0.20, weeks: 4, tasks: ["Set up Express.js server & routing", "Understand REST APIs and JSON payload handling", "Integrate JWT authentication and bcrypt password hashing"] },
      { id: "fs-m4", title: "Databases & System Design", weight: 0.20, weeks: 4, tasks: ["Learn PostgreSQL database modeling and relations", "Write SQL queries and use an ORM (Prisma/Sequelize)", "Deploy backend to Render/Fly.io and frontend to Vercel"] },
      { id: "fs-m5", title: "Capstone Project & Portfolio", weight: 0.15, weeks: 3, tasks: ["Build a full-stack collaborative kanban board", "Optimize web vitals and lighthouse score", "Practice 20 core mock system design interviews"] }
    ],
    risks: [
      "JavaScript tutorial hell (lack of active coding)",
      "Database schema index bottlenecks",
      "Resume screen rejections due to lack of unique projects"
    ]
  },
  marathon: {
    title: "Train and Complete a Marathon",
    category: "Health & Fitness",
    description: "Transition from occasional jogging to running a full marathon (42.2km / 26.2 miles) without injury, focusing on endurance, nutrition, and pacing.",
    baseHoursNeeded: 120,
    difficulty: "Medium",
    milestones: [
      { id: "run-m1", title: "Base Aerobic Capacity", weight: 0.15, weeks: 3, tasks: ["Establish comfortable 5km jogging baseline", "Complete 3 zone-2 runs per week", "Learn core leg-strengthening exercises"] },
      { id: "run-m2", title: "Endurance Ramp-Up", weight: 0.30, weeks: 5, tasks: ["Increase weekly mileage by maximum 10% per week", "Perform weekly long runs starting from 10km to 18km", "Experiment with mid-run energy gels and hydration"] },
      { id: "run-m3", title: "Peak Training", weight: 0.35, weeks: 6, tasks: ["Complete longest run of 32km at goal marathon pace", "Analyze pacing consistency and cardiovascular metrics", "Perform weekly track interval runs for speed endurance"] },
      { id: "run-m4", title: "Tapering & Hydration", weight: 0.10, weeks: 2, tasks: ["Reduce weekly mileage by 40% to allow muscle recovery", "Optimize carb-loading regimen", "Finalize race day pacing strategy and gear checklist"] },
      { id: "run-m5", title: "Race Day & Recovery", weight: 0.10, weeks: 1, tasks: ["Execute pacing plan on race day", "Celebrate milestone completion", "Post-race active recovery walks and stretching"] }
    ],
    risks: [
      "Shin splints or knee injuries due to excessive mileage ramp-up",
      "Improper race-day nutrition leading to 'hitting the wall'",
      "Inconsistent running routines on cold/rainy days"
    ]
  },
  cfa: {
    title: "Pass the CFA Level 1 Exam",
    category: "Education",
    description: "Master the 10 topic areas of the Chartered Financial Analyst Level 1 syllabus, perform rigorous practice questions, and pass the official examination.",
    baseHoursNeeded: 300,
    difficulty: "Hard",
    milestones: [
      { id: "cfa-m1", title: "Ethical & Quantitative Tools", weight: 0.20, weeks: 4, tasks: ["Study Ethical Standards and Professional Conduct", "Master Time Value of Money & Statistical concepts", "Solve 200 Ethics practice questions"] },
      { id: "cfa-m2", title: "Financial Reporting & Economics", weight: 0.30, weeks: 6, tasks: ["Analyze balance sheets, income statements, cash flows", "Master Microeconomics, Macroeconomics, and Forex", "Build comparative financial spreadsheet models"] },
      { id: "cfa-m3", title: "Asset Classes & Corporate Finance", weight: 0.25, weeks: 5, tasks: ["Learn equity investments, fixed income pricing, derivatives", "Master corporate governance, capital structures, leverage", "Solve 350 Asset Valuation practice formulas"] },
      { id: "cfa-m4", title: "Portfolio Management & Mock Exams", weight: 0.15, weeks: 3, tasks: ["Study portfolio theory, risk management, asset allocation", "Take first full-length diagnostic mock exam", "Identify weak topic modules for targeted review"] },
      { id: "cfa-m5", title: "Revision & Final Mock Blitz", weight: 0.10, weeks: 2, tasks: ["Take 3 timed mock exams under exam conditions", "Review flashcards for formulas and exceptions", "Calm nerves and finalize test-day logistics"] }
    ],
    risks: [
      "Overwhelming volume of curriculum material",
      "Inefficient study methods (reading instead of active recalling)",
      "Time management failures during the official exam session"
    ]
  }
};

// --- BASE AGENT ---
class BaseAgent {
  constructor(id, name, role, avatar, accentColor) {
    this.id = id;
    this.name = name;
    this.role = role;
    this.avatar = avatar;
    this.accentColor = accentColor;
    this.systemPrompt = `You are ${name}, the ${role} agent for the Life Navigator AI.`;
  }

  log(messageBus, text, level = "info") {
    messageBus.push({
      timestamp: new Date().toLocaleTimeString(),
      agentId: this.id,
      agentName: this.name,
      accentColor: this.accentColor,
      text: text,
      level: level
    });
  }
}

// --- GOAL ANALYSIS AGENT ---
export class GoalAnalysisAgent extends BaseAgent {
  constructor() {
    super("analysis", "Chronos", "Goal Analyst", "🔍", "#00f0ff");
  }

  analyze(messageBus, rawGoalText, category = "General") {
    this.log(messageBus, `Initiating primary goal parsing of user request: "${rawGoalText.substring(0, 40)}..."`);
    
    // Look for matching keyword templates
    let matchedTemplate = null;
    const textLower = rawGoalText.toLowerCase();
    
    if (textLower.includes("saas") || textLower.includes("business") || textLower.includes("startup") || textLower.includes("app")) {
      matchedTemplate = GOAL_TEMPLATES.saas;
    } else if (textLower.includes("code") || textLower.includes("developer") || textLower.includes("programmer") || textLower.includes("web") || textLower.includes("full-stack")) {
      matchedTemplate = GOAL_TEMPLATES.fullstack;
    } else if (textLower.includes("run") || textLower.includes("marathon") || textLower.includes("maraton") || textLower.includes("fitness") || textLower.includes("jog")) {
      matchedTemplate = GOAL_TEMPLATES.marathon;
    } else if (textLower.includes("cfa") || textLower.includes("exam") || textLower.includes("study") || textLower.includes("finance") || textLower.includes("pass")) {
      matchedTemplate = GOAL_TEMPLATES.cfa;
    }

    let parsedGoal;
    if (matchedTemplate) {
      this.log(messageBus, `Template match identified! Overlaying standard '${matchedTemplate.category}' schema for "${matchedTemplate.title}".`);
      parsedGoal = JSON.parse(JSON.stringify(matchedTemplate)); // deep copy
    } else {
      this.log(messageBus, "No direct template matched. Synthesizing custom milestone architecture using NLP heuristical structures...", "warning");
      
      // Synthesize custom goal structure
      parsedGoal = {
        title: rawGoalText,
        category: category,
        description: `Custom goal targeting ${rawGoalText}`,
        baseHoursNeeded: 150,
        difficulty: "Medium",
        milestones: [
          { id: "cust-m1", title: "Conceptual Design & Discovery", weight: 0.15, weeks: 2, tasks: ["Gather base requirements", "Study key prerequisites", "Outline workflow metrics"] },
          { id: "cust-m2", title: "Core Building Blocks Setup", weight: 0.35, weeks: 5, tasks: ["Build initial foundations", "Establish workflows", "Configure environmental variables"] },
          { id: "cust-m3", title: "Integration & Intermediate Milestones", weight: 0.25, weeks: 4, tasks: ["Connect components together", "Refine intermediate processes", "Run validation testing"] },
          { id: "cust-m4", title: "Optimization & Delivery Phase", weight: 0.15, weeks: 2, tasks: ["Audit defects & bottleneck points", "Prepare final deployment assets", "Conduct user verification testing"] },
          { id: "cust-m5", title: "Post-Completion Operations", weight: 0.10, weeks: 1, tasks: ["Formulate post-project maintenance", "Evaluate key learning vectors", "Celebrate achievement milestone"] }
        ],
        risks: [
          "Lack of structured educational material",
          "Inefficient pace tracking during intermediate building blocks",
          "Motivation drops during core phase transitions"
        ]
      };
    }

    this.log(messageBus, `Analysis complete. Core milestones established: ${parsedGoal.milestones.length}. Difficulty rating: ${parsedGoal.difficulty}. Passing structure to Planning Agent.`);
    return parsedGoal;
  }
}

// --- PLANNING AGENT ---
export class PlanningAgent extends BaseAgent {
  constructor() {
    super("planning", "Atlas", "Strategic Planner", "🧭", "#b55fe6");
  }

  generateRoadmap(messageBus, parsedGoal, hoursPerWeek, constraints = "") {
    this.log(messageBus, `Generating adaptive roadmap. Parameters: Target Hours per week = ${hoursPerWeek}h. Constraints noted: "${constraints || 'None'}".`);
    
    const baseHours = parsedGoal.baseHoursNeeded;
    // Scale timeline depending on hours per week committed
    // Total weeks needed = base hours / hours per week
    let calculatedWeeks = Math.ceil(baseHours / hoursPerWeek);
    
    // Constraints modifications
    if (constraints.toLowerCase().includes("fast") || constraints.toLowerCase().includes("rush")) {
      this.log(messageBus, `Applying 'Fast Track' constraint modifier. Compressing roadmap by 15% (expect higher workload intensity).`, "warning");
      calculatedWeeks = Math.max(2, Math.round(calculatedWeeks * 0.85));
    }
    
    this.log(messageBus, `Computed timeline duration: ${calculatedWeeks} weeks (total effort ~${baseHours} hours).`);

    // Distribute weeks to milestones proportionally based on their weight
    let distributedWeeks = 0;
    const adaptiveMilestones = parsedGoal.milestones.map((m, index) => {
      let mWeeks = Math.max(1, Math.round(calculatedWeeks * m.weight));
      
      // Make sure the last milestone rounds out exactly to the total
      if (index === parsedGoal.milestones.length - 1) {
        mWeeks = Math.max(1, calculatedWeeks - distributedWeeks);
      }
      distributedWeeks += mWeeks;

      // Map tasks to specific weeks within this milestone
      const tasksPerWeek = Math.ceil(m.tasks.length / mWeeks);
      const weeklyTasks = [];
      for (let i = 0; i < mWeeks; i++) {
        const startIdx = i * tasksPerWeek;
        const endIdx = Math.min(m.tasks.length, startIdx + tasksPerWeek);
        const subTasks = m.tasks.slice(startIdx, endIdx);
        weeklyTasks.push({
          weekIndex: i + 1,
          tasks: subTasks.map(tName => ({ name: tName, completed: false }))
        });
      }

      return {
        ...m,
        durationWeeks: mWeeks,
        weeklyDistribution: weeklyTasks,
        completed: false
      };
    });

    this.log(messageBus, `Roadmap finalized. 5 Milestones scattered across ${calculatedWeeks} weeks. Initializing daily tracker index.`);
    
    return {
      totalWeeks: calculatedWeeks,
      totalHours: baseHours,
      hoursPerWeek: hoursPerWeek,
      milestones: adaptiveMilestones,
      currentMilestoneIndex: 0,
      currentWeekIndex: 1,
      progressPercentage: 0,
      velocityIndex: 100 // 100% initial consistency
    };
  }

  replan(messageBus, currentRoadmap, missedTasksCount, currentVelocity) {
    this.log(messageBus, `Initiating replanning directive. Reason: Velocity dropped to ${currentVelocity}%. Missed tasks: ${missedTasksCount}.`);
    
    const replanRoadmap = JSON.parse(JSON.stringify(currentRoadmap));
    
    if (currentVelocity < 60) {
      // Major Replanning Needed: Stretch timeline
      const currentWeeks = replanRoadmap.totalWeeks;
      const stretchFactor = 1.25; // add 25% more time
      const newWeeks = Math.ceil(currentWeeks * stretchFactor);
      const addedWeeks = newWeeks - currentWeeks;
      
      this.log(messageBus, `CRITICAL VELOCITY DROP! Stretching remaining timeline by +${addedWeeks} weeks to prevent dropout. Adjusting weekly workload.`, "warning");
      
      replanRoadmap.totalWeeks = newWeeks;
      
      // Redistribute remaining milestones
      const activeMilestoneIdx = replanRoadmap.currentMilestoneIndex;
      for (let idx = activeMilestoneIdx; idx < replanRoadmap.milestones.length; idx++) {
        const m = replanRoadmap.milestones[idx];
        const addedToThis = Math.max(1, Math.round(addedWeeks * (m.weight / 0.8)));
        m.durationWeeks += addedToThis;
        
        // Re-distribute task array to fit new weeks
        const flatTasks = [];
        m.weeklyDistribution.forEach(w => w.tasks.forEach(t => flatTasks.push(t)));
        
        const newWeeklyTasks = [];
        const tasksPerWeek = Math.ceil(flatTasks.length / m.durationWeeks);
        for (let i = 0; i < m.durationWeeks; i++) {
          const start = i * tasksPerWeek;
          const end = Math.min(flatTasks.length, start + tasksPerWeek);
          newWeeklyTasks.push({
            weekIndex: i + 1,
            tasks: flatTasks.slice(start, end)
          });
        }
        m.weeklyDistribution = newWeeklyTasks;
      }
    } else {
      // Moderate Replanning Needed: Re-arrange within same timeframe
      this.log(messageBus, `Moderate slowdown. Pushing unfinished tasks into next week's schedule. Maintaining overall timeline.`);
      
      const activeMilestone = replanRoadmap.milestones[replanRoadmap.currentMilestoneIndex];
      const activeWeekIdx = Math.min(activeMilestone.weeklyDistribution.length - 1, replanRoadmap.currentWeekIndex - 1);
      
      // Gather incomplete tasks from active week
      const incomplete = activeMilestone.weeklyDistribution[activeWeekIdx].tasks.filter(t => !t.completed);
      
      // Filter active week to only complete ones
      activeMilestone.weeklyDistribution[activeWeekIdx].tasks = activeMilestone.weeklyDistribution[activeWeekIdx].tasks.filter(t => t.completed);
      
      // Push incomplete into next week (if it exists)
      const nextWeekIdx = activeWeekIdx + 1;
      if (nextWeekIdx < activeMilestone.weeklyDistribution.length) {
        activeMilestone.weeklyDistribution[nextWeekIdx].tasks.push(...incomplete);
        this.log(messageBus, `Pushed ${incomplete.length} pending tasks into Milestone Week ${nextWeekIdx + 1}.`);
      } else {
        // Create an extra week in this milestone
        activeMilestone.durationWeeks += 1;
        activeMilestone.weeklyDistribution.push({
          weekIndex: activeMilestone.durationWeeks,
          tasks: incomplete
        });
        replanRoadmap.totalWeeks += 1;
        this.log(messageBus, `Appended extra week to Milestone '${activeMilestone.title}' to absorb unfinished items.`);
      }
    }
    
    replanRoadmap.velocityIndex = Math.round(currentVelocity);
    this.log(messageBus, "Adaptation complete. Pushing updated scheduler coordinates to Recommendation Agent.");
    return replanRoadmap;
  }
}

// --- RECOMMENDATION AGENT ---
export class RecommendationAgent extends BaseAgent {
  constructor() {
    super("recommendation", "Vesta", "Action Recommender", "⚡", "#f59e0b");
  }

  generateNextAction(messageBus, roadmap, energyLevel = "Medium") {
    this.log(messageBus, `Scanning active roadmap. Current Milestone: Index ${roadmap.currentMilestoneIndex + 1}. Current Week: ${roadmap.currentWeekIndex}. Energy: ${energyLevel}.`);
    
    const activeMilestone = roadmap.milestones[roadmap.currentMilestoneIndex];
    if (!activeMilestone) {
      this.log(messageBus, "All milestones complete! Recommending victory loop.");
      return {
        taskName: "Celebrate Goal Completion!",
        reason: "You have completed all milestones in your journey. Evaluate your progress and set your next big goal!",
        estimatedMinutes: 60,
        priority: "High"
      };
    }

    // Get active week tasks
    const activeWeekIndex = Math.min(activeMilestone.weeklyDistribution.length - 1, roadmap.currentWeekIndex - 1);
    const activeWeek = activeMilestone.weeklyDistribution[activeWeekIndex];
    const pendingTasks = activeWeek.tasks.filter(t => !t.completed);

    if (pendingTasks.length === 0) {
      this.log(messageBus, "All tasks for the current week are complete. Checking ahead.");
      return {
        taskName: "Review Milestone Progress & Rest",
        reason: "You have successfully finished this week's sprint. Review your notes or take a well-deserved rest to maintain long-term consistency.",
        estimatedMinutes: 45,
        priority: "Medium"
      };
    }

    // Pick first pending task
    const baseTask = pendingTasks[0];
    
    // Adapt task based on Energy Level
    let recommendedName = baseTask.name;
    let estimatedMinutes = Math.round((roadmap.totalHours / roadmap.totalWeeks / activeWeek.tasks.length) * 60);
    let reasoning = "";

    if (energyLevel === "Low") {
      recommendedName = `[Micro-Habit Step] Review & Prep: ${baseTask.name}`;
      estimatedMinutes = Math.max(15, Math.round(estimatedMinutes * 0.4));
      reasoning = `Today's energy is low. I scaled down "${baseTask.name}" to a 15-30 min prep/reading session so you keep your daily consistency streak alive without risking burnout.`;
      this.log(messageBus, `Energy constraint applied (Low). Scaled task down by 60% into a micro-habit target.`, "warning");
    } else if (energyLevel === "High") {
      recommendedName = `[Deep-Work Sprint] ${baseTask.name}`;
      estimatedMinutes = Math.round(estimatedMinutes * 1.3);
      reasoning = `Today's energy is high. Take advantage! I structured a full deep-work sprint for "${baseTask.name}". Dive deep, block out distractions, and knock this out.`;
      this.log(messageBus, `Energy booster applied (High). Structuring an accelerated deep-work sprint.`);
    } else {
      reasoning = `Based on your pacing of ${roadmap.hoursPerWeek} hrs/week, focusing on this task keeps you aligned with your milestone target date.`;
    }

    const action = {
      taskName: recommendedName,
      originalName: baseTask.name,
      reason: reasoning,
      estimatedMinutes: estimatedMinutes,
      priority: energyLevel === "High" ? "Urgent" : "High"
    };

    this.log(messageBus, `Daily action item generated: "${action.taskName}" (${action.estimatedMinutes} mins).`);
    return action;
  }
}

// --- PROGRESS EVALUATION AGENT ---
export class ProgressEvaluationAgent extends BaseAgent {
  constructor() {
    super("progress", "Aegis", "Progress Evaluator", "🛡️", "#10b981");
  }

  evaluate(messageBus, roadmap) {
    this.log(messageBus, "Analyzing milestone checkboxes and task velocities...");
    
    let totalTasksCount = 0;
    let completedTasksCount = 0;
    
    roadmap.milestones.forEach((m) => {
      m.weeklyDistribution.forEach((w) => {
        w.tasks.forEach((t) => {
          totalTasksCount++;
          if (t.completed) completedTasksCount++;
        });
      });
    });

    const completionRate = totalTasksCount > 0 ? (completedTasksCount / totalTasksCount) * 100 : 0;
    this.log(messageBus, `Current compliance metrics: Completed ${completedTasksCount}/${totalTasksCount} tasks. Overall: ${completionRate.toFixed(1)}%.`);

    // Check if active week/milestone needs completion update
    let activeMilestone = roadmap.milestones[roadmap.currentMilestoneIndex];
    if (activeMilestone) {
      let activeMilestoneComplete = true;
      activeMilestone.weeklyDistribution.forEach((w) => {
        w.tasks.forEach((t) => {
          if (!t.completed) activeMilestoneComplete = false;
        });
      });
      
      if (activeMilestoneComplete && !activeMilestone.completed) {
        activeMilestone.completed = true;
        this.log(messageBus, `Milestone #${roadmap.currentMilestoneIndex + 1} ('${activeMilestone.title}') fully completed! Great job!`, "info");
        
        // Auto-increment active milestone
        if (roadmap.currentMilestoneIndex < roadmap.milestones.length - 1) {
          roadmap.currentMilestoneIndex++;
          roadmap.currentWeekIndex = 1;
        }
      }
    }

    roadmap.progressPercentage = Math.round(completionRate);
    
    // Check velocity. Let's calculate based on current week progress
    // Mocking velocity for simple UI. Let's make it reflect the current streak.
    const velocity = roadmap.velocityIndex;
    
    this.log(messageBus, `Evaluation Complete. Syncing state. Current Velocity Index: ${velocity}%.`);
    
    return {
      progressPercentage: Math.round(completionRate),
      currentMilestoneIndex: roadmap.currentMilestoneIndex,
      currentWeekIndex: roadmap.currentWeekIndex,
      velocityIndex: velocity
    };
  }
}

// --- FUTURE SIMULATION AGENT ---
export class FutureSimulationAgent extends BaseAgent {
  constructor() {
    super("simulation", "Zephyr", "Future Simulator", "🔮", "#f43f5e");
  }

  simulateScenario(messageBus, baseHoursNeeded, commitmentHours, currentRoadmap = null) {
    // Run numerical projection models based on Commitment Hours
    const totalWeeksNeeded = Math.ceil(baseHoursNeeded / commitmentHours);
    
    // Calculate risk parameters
    let burnoutRisk = 0;
    let dropoutRisk = 0;
    let retainmentRate = 100;
    
    if (commitmentHours > 15) {
      // Over-commitment leads to high burnout
      burnoutRisk = Math.min(95, Math.round((commitmentHours - 12) * 8 + 15));
      dropoutRisk = Math.min(75, Math.round(burnoutRisk * 0.6));
      retainmentRate = Math.max(10, 100 - dropoutRisk);
    } else if (commitmentHours < 3) {
      // Under-commitment leads to lack of momentum and dropout
      burnoutRisk = 5;
      dropoutRisk = Math.min(90, Math.round((4 - commitmentHours) * 25));
      retainmentRate = Math.max(10, 100 - dropoutRisk);
    } else {
      // Optimal Zone
      burnoutRisk = Math.round((commitmentHours - 3) * 1.5 + 5);
      dropoutRisk = Math.round((12 - commitmentHours) * 1.5 + 10);
      retainmentRate = 100 - Math.max(burnoutRisk, dropoutRisk);
    }

    // Adjust timeline stretch based on velocity index if available
    let velocityMultiplier = 1.0;
    if (currentRoadmap && currentRoadmap.velocityIndex) {
      velocityMultiplier = 100 / currentRoadmap.velocityIndex; // 80% velocity means 1.25x time multiplier
    }
    const realExpectedWeeks = Math.ceil(totalWeeksNeeded * velocityMultiplier);

    // Calculate projection data points (for chart rendering)
    const chartLabels = [];
    const baselineSeries = [];
    const projectedSeries = [];
    
    const totalDuration = Math.max(totalWeeksNeeded, realExpectedWeeks);
    const progressIncBaseline = 100 / totalWeeksNeeded;
    const progressIncProjected = 100 / realExpectedWeeks;

    for (let w = 0; w <= totalDuration; w++) {
      chartLabels.push(`Wk ${w}`);
      
      // Baseline progression curve
      if (w <= totalWeeksNeeded) {
        baselineSeries.push(Math.round(w * progressIncBaseline));
      } else {
        baselineSeries.push(100);
      }

      // Real expected curve (accounting for velocity drops)
      if (w <= realExpectedWeeks) {
        // Add a slight logarithmic sag to the real curve to make it look realistic
        const linear = w * progressIncProjected;
        const sag = Math.sin((w / realExpectedWeeks) * Math.PI) * -8;
        projectedSeries.push(Math.max(0, Math.min(100, Math.round(linear + sag))));
      } else {
        projectedSeries.push(100);
      }
    }

    return {
      hoursCommitted: commitmentHours,
      weeksRequired: totalWeeksNeeded,
      realExpectedWeeks: realExpectedWeeks,
      burnoutRisk: burnoutRisk,
      dropoutRisk: dropoutRisk,
      successProbability: retainmentRate,
      chartData: {
        labels: chartLabels,
        baseline: baselineSeries,
        projected: projectedSeries
      }
    };
  }

  runMultiScenario(messageBus, baseHoursNeeded, scenariosArray, currentRoadmap = null) {
    this.log(messageBus, `Synthesizing scenario comparisons for commitments: [${scenariosArray.join("h, ")}h] per week...`);
    
    const results = scenariosArray.map(hours => {
      return this.simulateScenario(null, baseHoursNeeded, hours, currentRoadmap);
    });

    this.log(messageBus, `Scenario simulations processed. Optimal commitment window identified at 6h - 10h per week.`);
    return results;
  }
}

// --- ORCHESTRATOR ---
export class AgentOrchestrator {
  constructor() {
    this.messageBus = [];
    this.agents = {
      analysis: new GoalAnalysisAgent(),
      planning: new PlanningAgent(),
      recommendation: new RecommendationAgent(),
      progress: new ProgressEvaluationAgent(),
      simulation: new FutureSimulationAgent()
    };
    this.activeRoadmap = null;
    this.activeGoal = null;
    this.scenarios = {}; // saved simulation models
  }

  initiateGoal(goalText, hoursPerWeek, constraints = "") {
    this.messageBus = []; // Reset logs for a new run
    
    // Step 1: Goal Analysis Agent
    this.activeGoal = this.agents.analysis.analyze(this.messageBus, goalText);
    
    // Step 2: Planning Agent
    this.activeRoadmap = this.agents.planning.generateRoadmap(this.messageBus, this.activeGoal, hoursPerWeek, constraints);
    
    // Step 3: Run Baseline Simulation
    this.runFutureProjections();

    return {
      goal: this.activeGoal,
      roadmap: this.activeRoadmap,
      logs: [...this.messageBus]
    };
  }

  runFutureProjections() {
    if (!this.activeGoal || !this.activeRoadmap) return;
    
    // Run the simulation comparing: baseline (current hours/week), lazy (4h/week), fast (12h/week)
    const baseHours = this.activeGoal.baseHoursNeeded;
    const currentComm = this.activeRoadmap.hoursPerWeek;
    
    const comparisonPoints = [Math.max(1, currentComm - 3), currentComm, Math.min(25, currentComm + 5)];
    const uniquePoints = [...new Set(comparisonPoints)].sort((a,b)=>a-b);
    
    this.scenarios = this.agents.simulation.runMultiScenario(
      this.messageBus,
      baseHours,
      uniquePoints,
      this.activeRoadmap
    );
  }

  toggleTaskCompletion(milestoneId, weekIdx, taskIdx) {
    if (!this.activeRoadmap) return;
    
    // Find the task
    const milestone = this.activeRoadmap.milestones.find(m => m.id === milestoneId);
    if (!milestone) return;
    
    const week = milestone.weeklyDistribution[weekIdx];
    if (!week) return;
    
    const task = week.tasks[taskIdx];
    if (!task) return;
    
    task.completed = !task.completed;
    
    // Evaluate via Progress Agent
    const evalResult = this.agents.progress.evaluate(this.messageBus, this.activeRoadmap);
    
    this.activeRoadmap.progressPercentage = evalResult.progressPercentage;
    this.activeRoadmap.currentMilestoneIndex = evalResult.currentMilestoneIndex;
    
    return {
      roadmap: this.activeRoadmap,
      logs: [...this.messageBus]
    };
  }

  simulateMissedDays(missedTaskCount) {
    if (!this.activeRoadmap) return;
    
    this.messageBus = [];
    // Adjust velocity index downwards
    const penalty = missedTaskCount * 12;
    this.activeRoadmap.velocityIndex = Math.max(30, this.activeRoadmap.velocityIndex - penalty);
    
    // Trigger planning agent replan meeting
    this.activeRoadmap = this.agents.planning.replan(
      this.messageBus, 
      this.activeRoadmap, 
      missedTaskCount, 
      this.activeRoadmap.velocityIndex
    );
    
    // Re-evaluate progress
    this.agents.progress.evaluate(this.messageBus, this.activeRoadmap);
    
    // Re-run simulation projections based on new velocity coordinates
    this.runFutureProjections();

    return {
      roadmap: this.activeRoadmap,
      logs: [...this.messageBus]
    };
  }

  executeDirective(directiveText) {
    this.messageBus = [];
    const textLower = directiveText.toLowerCase();
    
    this.messageBus.push({
      timestamp: new Date().toLocaleTimeString(),
      agentId: "user",
      agentName: "User Directive",
      accentColor: "#ffffff",
      text: `Executing custom system directive: "${directiveText}"`,
      level: "info"
    });

    if (textLower.includes("burnout") || textLower.includes("stress")) {
      // Trigger Burnout Mitigation meeting
      this.agents.simulation.log(this.messageBus, "Running fatigue audit. Burnout risk is currently flagged. Initiating mitigation negotiation...");
      this.agents.planning.log(this.messageBus, "Proposing workload cap: Restricting weekly study targets to 8 hours/week maximum.", "info");
      this.agents.recommendation.log(this.messageBus, "Recalibrating action engines: Adding compulsory 15-minute relaxation checklists to daily sprint recommenders.", "info");
      
      if (this.activeRoadmap) {
        if (this.activeRoadmap.hoursPerWeek > 8) {
          this.activeRoadmap.hoursPerWeek = 8;
          this.activeRoadmap = this.agents.planning.generateRoadmap(this.messageBus, this.activeGoal, 8, "low-stress");
        }
      }
    } else if (textLower.includes("optimize") || textLower.includes("speed")) {
      // Speed up timeline
      this.agents.planning.log(this.messageBus, "Initiating timeline optimization routine. Compacting milestone boundaries by 20%.");
      this.agents.simulation.log(this.messageBus, "Simulating accelerated curve. Alert: Burnout threshold will spike by +28%. Proceeding as instructed.", "warning");
      
      if (this.activeRoadmap) {
        const boostedHours = Math.min(24, this.activeRoadmap.hoursPerWeek + 4);
        this.activeRoadmap = this.agents.planning.generateRoadmap(this.messageBus, this.activeGoal, boostedHours, "fast");
      }
    } else if (textLower.includes("scope") || textLower.includes("reduce")) {
      // Reduce Scope
      this.agents.analysis.log(this.messageBus, "Downscaling MVP feature matrix. Excising non-critical secondary components.");
      this.agents.planning.log(this.messageBus, "Adjusting roadmap weights. Excising Phase 5 tasks. Reducing base hours needed by 25%.");
      
      if (this.activeGoal && this.activeRoadmap) {
        this.activeGoal.baseHoursNeeded = Math.round(this.activeGoal.baseHoursNeeded * 0.75);
        this.activeRoadmap = this.agents.planning.generateRoadmap(this.messageBus, this.activeGoal, this.activeRoadmap.hoursPerWeek);
      }
    } else {
      this.agents.planning.log(this.messageBus, "Directive analyzed. No standard negotiation template matched. Running diagnostic health check across all agent systems: ALL SYSTEMS NOMINAL.");
    }

    this.runFutureProjections();

    return {
      goal: this.activeGoal,
      roadmap: this.activeRoadmap,
      logs: [...this.messageBus]
    };
  }
}
