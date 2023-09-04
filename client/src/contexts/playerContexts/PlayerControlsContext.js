import { PlayerStateContextProvider } from "./PlayerStateContext";
import { VolumeContextProvider } from "./VolumeContext";
import { CurrentTimeContextProvider } from "./CurrentTimeContext";
import { DurationContextProvider } from "./DurationContext";

export function PlayerControlsContextProvider(props) {
  return (
    <PlayerStateContextProvider>
      <VolumeContextProvider>
        <CurrentTimeContextProvider>
          <DurationContextProvider>{props.children}</DurationContextProvider>
        </CurrentTimeContextProvider>
      </VolumeContextProvider>
    </PlayerStateContextProvider>
  );
}
