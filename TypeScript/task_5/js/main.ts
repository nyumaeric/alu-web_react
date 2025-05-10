interface MajorCredits {
    credits: number;
    readonly __brand: "MajorCredits"; // Brand property for unique identification
  }
  
  interface MinorCredits {
    credits: number;
    readonly __brand: "MinorCredits"; // Brand property for unique identification
  }
  
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      __brand: "MajorCredits"
    };
  }
  
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      __brand: "MinorCredits"
    };
  }
  
  // You can add example usage here if you like:
  // const major1: MajorCredits = { credits: 3, __brand: "MajorCredits" };
  // const major2: MajorCredits = { credits: 4, __brand: "MajorCredits" };
  // console.log(sumMajorCredits(major1, major2));
  //
  // const minor1: MinorCredits = { credits: 1, __brand: "MinorCredits" };
  // const minor2: MinorCredits = { credits: 2, __brand: "MinorCredits" };
  // console.log(sumMinorCredits(minor1, minor2));