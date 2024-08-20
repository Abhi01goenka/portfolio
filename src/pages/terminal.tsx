// import { useState, useEffect } from 'react';

// const directoryTree = {
//   name: '/',
//   children: [
//     { name: 'About Me' },
//     {
//       name: 'Skills',
//       children: [
//         { name: 'React' },
//         { name: 'Next.js' },
//         { name: 'C++' },
//         { name: 'C' },
//         { name: 'Java' },
//         { name: 'Python' },
//         { name: 'Linux' },
//         { name: 'Flutter' },
//       ],
//     },
//     {
//       name: 'Projects',
//       children: [
//         { name: 'project1' },
//         { name: 'project2' },
//         { name: 'project3' },
//       ],
//     },
//     {
//       name: 'Achievements',
//       children: [
//         { name: 'achievement1' },
//         { name: 'achievement2' },
//         { name: 'achievement3' },
//       ],
//     },
//   ],
// };

// const commands = {
//   about: "About Me content goes here...",
//   skills: "Skills content goes here...",
//   projects: "Projects content goes here...",
//   achievements: "Achievements content goes here...",
//   ls: "Lists directory contents",
//   pwd: "Prints working directory",
//   cd: "Changes directory",
//   tree: "Displays directory tree",
//   clear: "Clears the terminal",
// };

// const getAllNodes = (node: any, prefix = ''): string[] => {
//   let nodes = [prefix + node.name];
//   if (node.children) {
//     node.children.forEach((child: any) => {
//       nodes = nodes.concat(getAllNodes(child, prefix + node.name + '/'));
//     });
//   }
//   return nodes;
// };

// const allNodes = getAllNodes(directoryTree);

// const Terminal: React.FC = () => {
//   const [input, setInput] = useState('');
//   const [history, setHistory] = useState<string[]>([]);
//   const [currentDir, setCurrentDir] = useState<string>('/');
//   const [currentPath, setCurrentPath] = useState<any>(directoryTree);
//   const [suggestions, setSuggestions] = useState<string[]>([]);
//   const [placeholder, setPlaceholder] = useState('Start by writing tree');

//   useEffect(() => {
//     if (history.length === 2) {
//       setPlaceholder('Type anything from the above tree, the auto-completion will assist you.');
//     }
//   }, [history]);

//   const handleLs = (path: any) => {
//     return path.children ? path.children.map((child: any) => child.name).join(' ') : '';
//   };

//   const handlePwd = () => {
//     return currentDir;
//   };

//   const handleCd = (dir: string) => {
//     if (dir === '/') {
//       setCurrentDir('/');
//       setCurrentPath(directoryTree);
//     } else {
//       const newPath = currentPath.children.find((child: any) => child.name.toLowerCase() === dir.toLowerCase());
//       if (newPath) {
//         setCurrentDir(`${currentDir}${dir}/`);
//         setCurrentPath(newPath);
//       } else {
//         return `cd: no such file or directory: ${dir}`;
//       }
//     }
//   };

//   const handleTree = (node: any, prefix = '', isLast = true): string => {
//     let result = `${prefix}${isLast ? '└── ' : '├── '}${node.name}\n`;
//     if (node.children) {
//       const newPrefix = prefix + (isLast ? '    ' : '│   ');
//       node.children.forEach((child: any, idx: number) => {
//         result += handleTree(child, newPrefix, idx === node.children.length - 1);
//       });
//     }
//     return result;
//   };

//   const handleCommand = (command: string) => {
//     const [cmd, ...args] = command.split(' ');
//     let output = '';

//     if (cmd.toLowerCase() === 'clear') {
//       setHistory([]);
//       return;
//     }

//     switch (cmd.toLowerCase()) {
//       case 'ls':
//         output = handleLs(currentPath);
//         break;
//       case 'pwd':
//         output = handlePwd();
//         break;
//       case 'cd':
//         output = handleCd(args[0]) || '';
//         break;
//       case 'tree':
//         output = handleTree(directoryTree);
//         break;
//       default:
//         output = commands[cmd.toLowerCase()] || `Command not found: ${cmd}`;
//         break;
//     }

//     setHistory([...history, `> ${command}`, output]);
//   };

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === 'Enter') {
//       handleCommand(input);
//       setInput('');
//       setSuggestions([]);
//     } else if (e.key === 'Tab') {
//       e.preventDefault();
//       if (suggestions.length > 0) {
//         setInput(suggestions[0]);
//         setSuggestions([]);
//       }
//     }
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value.toLowerCase();
//     setInput(value);
//     if (value) {
//       const newSuggestions = allNodes.filter((node) =>
//         node.toLowerCase().startsWith(value)
//       );
//       setSuggestions(newSuggestions);
//     } else {
//       setSuggestions([]);
//     }
//   };

//   return (
//     <div className="bg-black text-green-500 h-screen p-4 font-mono" style={{ backgroundImage: 'url("/background.jpg")', backgroundSize: 'cover' }}>
//       <div className="overflow-auto h-full">
//         {history.map((entry, idx) => (
//           <div key={idx} className="whitespace-pre-wrap">
//             <span className={entry.startsWith('>') ? 'text-yellow-500' : ''}>{entry}</span>
//           </div>
//         ))}
//         <div className="flex">
//           <span className="pr-2 text-yellow-500">{'>'}</span>
//           <input
//             className="bg-black text-green-500 focus:outline-none flex-grow"
//             value={input}
//             onChange={handleChange}
//             onKeyDown={handleKeyDown}
//             placeholder={placeholder}
//             autoFocus
//           />
//         </div>
//         {suggestions.length > 0 && (
//           <div className="text-yellow-500 mt-2">
//             {suggestions.map((suggestion, idx) => (
//               <div key={idx}>{suggestion}</div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Terminal;
