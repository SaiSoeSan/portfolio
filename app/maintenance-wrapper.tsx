import MaintenancePage from "./maintenance/page";

/**
 * Maintenance Mode Component
 *
 * To enable maintenance mode:
 * 1. Set MAINTENANCE_MODE to true
 * 2. Deploy your changes
 *
 * To disable maintenance mode:
 * 1. Set MAINTENANCE_MODE to false
 * 2. Deploy your changes
 */

const MAINTENANCE_MODE = true; // Change this to true to enable maintenance mode

const MaintenanceWrapper = ({ children }: { children: React.ReactNode }) => {
  if (MAINTENANCE_MODE) {
    return <MaintenancePage />;
  }

  return <>{children}</>;
};

export default MaintenanceWrapper;
