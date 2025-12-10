module.exports = {
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    },
    moduleNameMapper: {
        // handle CSS imports
        "\\.(css|less|scss|sass)$": "identity-obj-proxy",

        // optionally match your Vite aliases
        "^@/(.*)$": "<rootDir>/src/$1",
    },
    setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
};
