import AppBar from '@material-ui/core/AppBar';
import {unstable_Box as _Box} from '@material-ui/core/Box';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Button, {ButtonProps} from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import CircularProgress from '@material-ui/core/CircularProgress';
import CssBaseline from '@material-ui/core/CssBaseline';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import MUILink, {LinkProps as MUILinkProps} from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Paper, {PaperProps} from '@material-ui/core/Paper';
import Portal from '@material-ui/core/Portal';
import {createMuiTheme} from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Tabs from '@material-ui/core/Tabs';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ClearIcon from '@material-ui/icons/Clear';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';
import ErrorIcon from '@material-ui/icons/Error';
import MenuIcon from '@material-ui/icons/Menu';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import SwapVertIcon from '@material-ui/icons/SwapVert';
import {makeStyles, styled, ThemeProvider, useTheme} from '@material-ui/styles';
import React, {useEffect, HTMLProps} from 'react';
import {Link as RRLink} from 'react-router-dom';
import {BoxProps} from './BoxProps';

const Box: React.FunctionComponent<BoxProps> = _Box as any;

export * from '@material-ui/core/Button';
export * from '@material-ui/core/Card';
export * from '@material-ui/core/Paper';
export * from '@material-ui/core/styles';
export * from '@material-ui/core/Typography';
export {
  EditIcon,
  CloseIcon,
  RemoveCircleOutlineIcon,
  Paper,
  Card,
  Dialog,
  Chip,
  CircularProgress,
  DialogActions,
  Tab,
  Grid,
  Tabs,
  DialogContent,
  DialogTitle,
  Breadcrumbs,
  TextField,
  InputLabel,
  Button,
  CssBaseline,
  AppBar,
  Toolbar,
  styled,
  Portal,
  Box,
  DialogContentText,
  Menu,
  ChevronRightIcon,
  MenuItem,
  MenuIcon,
  Table,
  TableBody,
  ListItemIcon,
  Hidden,
  Drawer,
  ThemeProvider,
  ErrorIcon,
  useTheme,
  makeStyles,
  TableCell,
  TableRow,
  SwapVertIcon,
  ClearIcon,
  PlayCircleFilledIcon,
  AddCircleIcon,
  TableHead,
  List,
  ListItemText,
  ListItem,
  IconButton,
  ListItemSecondaryAction,
  Divider,
  Typography,
};

export const PaperView: React.FunctionComponent<PaperProps & BoxProps> = props => <Box component={Paper} {...props} />;

export const LinkRRLink: React.FunctionComponent<MUILinkProps & {to?: any}> = props => <MUILink component={RRLink} {...props} />;

export const ButtonRRLink: React.FunctionComponent<ButtonProps & {to?: any}> = props => <Button component={RRLink} {...props} />;

export const Row: React.FunctionComponent<BoxProps> = props => <Box display="flex" flexDirection="row" {...props} />;

export const Column: React.FunctionComponent<BoxProps> = props => <Box display="flex" flexDirection="column" {...props} />;

export const View = Column;

export const RowBar: React.FunctionComponent<BoxProps> = props => (
  <Box display="flex" flexDirection="row" alignItems="center" mx={2} py={2} {...props} />
);

export const HSpace: React.FunctionComponent<{}> = () => <Box width={10} />;

export const VSpace: React.FunctionComponent<{}> = () => <Box height={10} />;

export const ImageBackground: React.FunctionComponent<HTMLProps<any>> = ({style, ...props}) => (
  <Box
    position="fixed"
    top={0}
    left={0}
    right={0}
    bottom={0}
    zIndex={-1}
    style={{
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      ...style,
    }}
    {...props}
  />
);

export const Img: React.FunctionComponent<BoxProps & HTMLProps<any>> = props => <Box component="img" {...props} />;

export const MountTester = (props: any) => {
  useEffect(() => {
    console.log('MOUNT!');
    return () => console.log('UNMOUNT!');
  }, []);
  return <div>MountTester</div>;
};

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2e7d32',
    },
    secondary: {
      main: '#0091ea',
    },
  },
  zIndex: {
    mobileStepper: 1000,
    appBar: 1200,
    drawer: 1100,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
});
