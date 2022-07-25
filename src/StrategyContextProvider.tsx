import { createContext, useContext, useState } from "react";

type CustomContextType = {
  employeeContribution: number;
  retirementAge: number;
  setEmployeeContribution: React.Dispatch<React.SetStateAction<number>>;
  setRetirementAge: React.Dispatch<React.SetStateAction<number>>;
};

const StrategyContext = createContext<CustomContextType>({
  employeeContribution: 12,
  retirementAge: 65,
  setEmployeeContribution: () => {},
  setRetirementAge: () => {},
});

const StrategyContextProvider = ({ children }: { children: JSX.Element }) => {
  const [employeeContribution, setEmployeeContribution] = useState(12);
  const [retirementAge, setRetirementAge] = useState(65);

  return (
    <StrategyContext.Provider
      value={{
        employeeContribution,
        setEmployeeContribution,
        retirementAge,
        setRetirementAge,
      }}
    >
      {children}
    </StrategyContext.Provider>
  );
};

export default StrategyContextProvider;

export const StrategyState = () => useContext(StrategyContext);
