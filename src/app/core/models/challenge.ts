export interface ChallengeProps {
    id: number;
    title: string;
    type: string;
    description: string;
    points: number;
}

export class Challenge {
    public readonly props: ChallengeProps

    constructor(props: ChallengeProps) {
        this.props = props;
    }

    public static create(props: ChallengeProps): Challenge{
        const validType = [ 'action', 'vérité']

        if (typeof props.type === 'string' && validType.includes(props.type)){
            return new Challenge(props);
        } else {
            throw new Error("Invalid challenge type: " + props.type)
        }
    }

    updateDescription(player1: string, player2: string): void{
        this.props.description = this.props.description.replace(/Player1/g, player1).replace(/Player2/g, player2);
    } 
}