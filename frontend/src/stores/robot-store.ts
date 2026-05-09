import { create } from 'zustand';
import { Robot, RobotState } from '../domains/robots/types';

interface RobotStore {
  robots: Record<string, Robot>;
  addRobot: (robot: Robot) => void;
  updateRobot: (id: string, updates: Partial<Robot>) => void;
  setRobots: (robots: Robot[]) => void;
  getRobotsArray: () => Robot[];
}

export const useRobotStore = create<RobotStore>((set, get) => ({
  robots: {},
  addRobot: (robot) => set((state) => ({ 
    robots: { ...state.robots, [robot.id]: robot } 
  })),
  updateRobot: (id, updates) => set((state) => {
    if (!state.robots[id]) return state;
    return {
      robots: {
        ...state.robots,
        [id]: { ...state.robots[id], ...updates }
      }
    };
  }),
  setRobots: (robotsList) => set(() => {
    const robotsMap: Record<string, Robot> = {};
    robotsList.forEach(r => robotsMap[r.id] = r);
    return { robots: robotsMap };
  }),
  getRobotsArray: () => Object.values(get().robots)
}));
