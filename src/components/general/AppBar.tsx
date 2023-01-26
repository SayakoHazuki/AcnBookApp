import * as React from 'react';
import {Appbar} from 'react-native-paper';

// declare AppBarProps
interface AppBarProps {
  title: string;
  backAction?: () => void;
  actions?: {
    icon: string;
    onPress: () => void;
  }[];
}

function AppBar(props: AppBarProps) {
  return (
    <Appbar.Header>
      {/*//@ts-ignore*/}
      {props.backAction ? <Appbar.BackAction onPress={() => {}} /> : null}
      {/*//@ts-ignore*/}
      <Appbar.Content title={props.title} />

      {props.actions
        ? props.actions.map((action, index) => (
            <Appbar.Action
              key={index}
              icon={action.icon}
              onPress={action.onPress}
              accessibilityLabelledBy={action.icon}
              accessibilityLanguage="en"
            />
          ))
        : null}
    </Appbar.Header>
  );
}

export default AppBar;
