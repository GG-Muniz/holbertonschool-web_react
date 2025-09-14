// Branded credit types
interface MajorCredits {
  credits: number;
  readonly __brand: 'Major';
}

interface MinorCredits {
  credits: number;
  readonly __brand: 'Minor';
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits, __brand: 'Major' };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits, __brand: 'Minor' };
}

export { MajorCredits, MinorCredits, sumMajorCredits, sumMinorCredits };
