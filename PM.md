# 1.  Student Schema

```javascript
  const studentSchema = {
  _id: ObjectId,
  studentId: String,            // e.g., "22CS001"
  email: String,                // institutional email
  password: String,             // hashed
  department: {
    type: String,
    enum: ["CS", "IT", "CE", "AI-ML"]
  },
  profile: {
    name: String,
    contact: String,
    avatar: String,
    bio: String
  },
  semester: Number,
  batch: String,  // e.g., "2022-2026"
  currentGroup: {              // Reference to current active group
    type: ObjectId,
    ref: 'Group'
  },
  groupInvitations: [{         // Track group invitations
    groupId: {
      type: ObjectId,
      ref: 'Group'
    },
    status: {
      type: String,
      enum: ["Pending", "Accepted", "Rejected"]
    },
    invitedAt: Date
  }],
  projectHistory: [{ // Track past projects
    groupId: {
      type: ObjectId,
      ref: 'Group'
    },
    projectId: {
      type: ObjectId,
      ref: 'Project'
    },
    semester: Number,
    academicYear: String
  }],
  skills: [{
    name: String, // Technology name
    level: {
      type: String,
      enum: ["Beginner", "Intermediate", "Advanced", "Expert"]
    }
  }],
  createdAt: Date,
  updatedAt: Date
}

```

# 2. Faculty Schema 

```javascript
const facultySchema = {
  _id: ObjectId,
  facultyId: String,
  email: String,
  password: String,
  department: {
    type: String,
    enum: ["CS", "IT", "CE", "AI-ML"]
  },
  profile: {
    name: String,
    contact: String,
    avatar: String,
    bio: String
  },
  designation: String,
  specialization: [String], // Optional
  isCoordinator: Boolean,
  createdAt: Date,
  updatedAt: Date
}

```

# 3. Project Schema

```javascript
const projectSchema = {
  _id: ObjectId,
  groupId: { type: mongoose.Schema.Types. ObjectId, 
    ref: 'Group',
    required: true
  },
  title: String,
  domain: {               // Reference to technology domain
    type: ObjectId,
    ref: 'Technology'
  },
  technologies: [{      // Reference to specific technologies
    type: ObjectId,
    ref: 'Technology'
  }],
  researchArea : String,
  description: String,
  approvalStatus: {
    type: String,
    enum: ["pending", "approved", "rejected"]
  },
  githubRepoLink : String,
  type: {
    type: String,
    enum: ["SGP", "Open Project"]
  },
  status: {
    type: String,
    enum: ["Active", "Completed", "Abandoned"]
  },
  approvedBy: {  // reference to Faculty
    type: ObjectId,
    ref: 'Faculty'
  },
  documents: [{
    type: String,
    url: String,
    uploadedAt: Date
  }],
  startDate: Date,
  endDate: Date,
  createdAt: Date,
  updatedAt: Date
}
```

# 4. Group Schema
```javascript
const groupSchema = {
  _id: ObjectId,
  groupId: String , // Custom ID
  projectId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'Project',
    unique: true  // Ensures one group per project
  },
  department: {
    type: String,
    enum: ["CS", "IT", "CE", "AI-ML"]
  },
  semester:{
    type: Number,
    min: 3,
    max: 7 
  },
  academicYear: String,        // e.g., "2023-24"
  mentor: {                    // Reference to faculty
    type: ObjectId,
    ref: 'Faculty'
  },
  members: [{
    studentId: {    // Reference to student
      type: ObjectId,
      ref: 'Student'
    },
    isLeader: Boolean,        // True for group leader
    status: {
      type: String,
      enum: ["Pending", "Accepted"]
    },
    joinedAt: Date
  }],
  maxMembers:{
    type: Number,
    min: 1,
    max: 3
  },
  githubMetrics: {            // Added to store GitHub statistics
    repoName: String,
    contributors: [{
      username: String,
      commits: Number,
      additions: Number,
      deletions: Number,
      lastUpdated: Date
    }],
    lastFetched: Date
  },
  createdAt: Date,
  updatedAt: Date
}

```
# 5. Weekly Report 
```javascript
const weeklyReportSchema = {
  _id: ObjectId,
  groupId: {
    type: ObjectId,
    ref: 'Group'
  },
  weekNumber: Number,
  reportPeriod: {    // Added report period
    startDate: Date,
    endDate: Date
  },
  submissionDate: Date,
  content: {
    workDone: String,
    challenges: String,
    nextWeekPlan: String,
    attachments: [{
      name: String,
      url: String
    }]
  },
  evaluation: {
    studentMarks: [{  // Individual marks
      studentId: {
        type: ObjectId,
        ref: 'Student'
      },
      marks: [{  // Marks per criteria
        criteriaId: ObjectId,
        score: Number
      }],
      total: Number
    }],
    feedback: String,         // Overall feedback
    evaluatedBy: {
      type: ObjectId,
      ref: 'Faculty'
    },
    evaluatedAt: Date
  },
  status: {
    type: String,
    enum: ["Draft", "Submitted", "Evaluated"]
  }
}

```

# 6. Rubrics Schema 
```javascript
const rubricSchema = {
  _id: ObjectId,
  title: String,
  semester: Number,
  academicYear: String,
  criteria: [{
    title: String,           // e.g., "Content & Progress Overview"
    maxMarks: Number,
    weightage: Number
  }],
  totalMarks: Number,        // e.g., 25
  createdBy: {
    type: ObjectId,
    ref: 'Faculty'
  },
  createdAt: Date,
  updatedAt: Date
}
```

# 7. Announcement Schema
```javascript
const announcementSchema = {
  _id: ObjectId,
  title: String,
  content: String,
  createdBy: {
    type: ObjectId,
    ref: 'Faculty'
  },
  attachments: [{
    name: String,
    url: String
  }],
  targetAudience: {
    departments: [String],
    semesters: [Number]
  },
  validUntil: Date,
  createdAt: Date,
  updatedAt: Date
}
```

# 8. Technology Schema 
```javascript
const technologySchema = {
  _id: ObjectId,
  domain: {
    type: String,
    enum: [
      "Web Development",
      "Mobile Development",
      "Machine Learning",
      "Artificial Intelligence",
      "Cloud Computing",
      "DevOps",
      "Blockchain",
      "IoT",
      "Cybersecurity",
      "Data Science",
      "AR/VR",
      "Game Development",
      "Embedded Systems",
      "Robotics"
    ]
  },
  technologies: [{
    name: {
      type: String,
      enum: [
        // Web Development
        "React", "Angular", "Vue", "Node.js", "Express", "Django", "Spring Boot",
        // Mobile Development
        "React Native", "Flutter", "Android", "iOS", "Kotlin", "Swift",
        // Machine Learning & AI
        "TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "NLP",
        // Cloud & DevOps
        "AWS", "Azure", "GCP", "Docker", "Kubernetes", "Jenkins",
        // Database
        "MongoDB", "MySQL", "PostgreSQL", "Redis", "Firebase",
        // Others
        "Python", "Java", "C++", "Go", "Rust", "Solidity"
      ]
    },
    category: {
      type: String,
      enum: ["Frontend", "Backend", "Database", "DevOps", "Mobile", "AI/ML", "Other"]
    }
  }]
}

```
#  9. Admin Schema 
```javascript
const adminSchema = {
  _id: ObjectId,
  email: String,
  password: String,      // hashed
  profile: {
    name: String,
    contact: String,
    avatar: String
  },
   department: {
    type: String,
    enum: ["CS", "IT", "CE", "AI-ML"]
  },
  role: {
    type: String,
    default: "admin"
  },
  permissions: [String], // Array of specific admin permissions
  createdAt: Date,
  updatedAt: Date
}
```

# 10. Meeting Schema 
```javascript
const meetingSchema = {
  _id: ObjectId,
  groupId: ObjectId,
  facultyId: ObjectId,
  title: String,
  platform: String,    // "Google Meet" | "Zoom" | "Teams"
  link: String,
  datetime: Date,
  duration: Number,    // in minutes
  agenda: String,
  status: String,      // "scheduled" | "completed" | "cancelled"
  attendees: [{
    userId: ObjectId,
    status: String     // "pending" | "accepted" | "declined"
  }]
}

```