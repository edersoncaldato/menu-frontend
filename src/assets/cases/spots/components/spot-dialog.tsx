import type { SpotDTO } from "../dtos/spot.dto";

export function SpotDialog({ spot }: { spot: SpotDTO }) {
  return (
    <div>
      <h2>{spot.name}</h2>
      <p>{spot.description}</p>
    </div>
  );
}