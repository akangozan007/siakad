import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ConstructionRoundedIcon from '@mui/icons-material/ConstructionRounded';
import SettingsSuggestRoundedIcon from '@mui/icons-material/SettingsSuggestRounded';
import ThumbUpAltRoundedIcon from '@mui/icons-material/ThumbUpAltRounded';
import { SitemarkIcon } from './CustomIcons';

const items = [
  {
    icon: <SettingsSuggestRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'Academic Information System',
    description:
      'An Academic Information System (AIS) is a comprehensive software application designed to manage, process, and organize academic-related information in an educational institution. It provides a centralized platform for students, teachers, and administrative staff to manage academic data efficiently.',
  },
  {
    icon: <ConstructionRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'Administrator Features in Academic Information System (SIA)',
    description:
      'The Administrator is a key role within the Academic Information System (AIS), responsible for managing the overall system, overseeing user roles, and ensuring smooth operation of the platform. Administrators have full access to all features and functions, allowing them to configure, monitor, and control various aspects of the system.',
  },
  {
    icon: <ThumbUpAltRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'Modern and Responsive Design',
    description:
      'To create a modern and responsive design in an Academic Information System (SIA), we must ensure that the user interface (UI) adapts well to various devices (such as desktop, tablet, and mobile) and also looks attractive and is easy to use',
  },
  {
    icon: <AutoFixHighRoundedIcon sx={{ color: 'text.secondary' }} />,
    title: 'Fast and Secure Data Processing with API Integration',
    description:
      'In an Academic Information System (SIA), data processing becomes both faster and more secure when integrated with APIs (Application Programming Interfaces). By utilizing RESTful APIs or GraphQL, data can be efficiently transmitted and processed between the server and the client with minimal latency, providing a smooth and responsive user experience',
  },
];

export default function Content() {
  return (
    <Stack
      sx={{ flexDirection: 'column', alignSelf: 'center', gap: 4, maxWidth: 450 }}
    >
      <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
        {/* <SitemarkIcon /> */}
      </Box>
      {items.map((item, index) => (
        <Stack key={index} direction="row" sx={{ gap: 2 }}>
          {item.icon}
          <div>
            <Typography gutterBottom sx={{ fontWeight: 'medium' }}>
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {item.description}
            </Typography>
          </div>
        </Stack>
      ))}
    </Stack>
  );
}
