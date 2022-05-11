enum permissions {
  admin,
  aditor,
  guest,
}

const admin = {
  level: permissions.admin, // 0
};

const editor = {
  level: permissions.aditor, // 1
};

const guest = {
  level: permissions.guest, // 2
};

enum feedbackTypes {
  bug = "BUG",
  idea = "IDEA",
  other = "OTHER",
}

const feedback = {
  type: feedbackTypes.idea, // IDEA
  message: "show me the code!",
};

enum colors {
  red = "#f22",
  black = "#000",
  yellow = "#fb1",
}
