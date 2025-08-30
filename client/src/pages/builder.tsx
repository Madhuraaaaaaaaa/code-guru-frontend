import React, { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Save,
  Eye,
  Code,
  Type,
  Square,
  Image,
  FormInput,
  Container,
  Move,
  Copy,
  Trash2,
  Settings,
  Zap
} from 'lucide-react';

interface Element {
  id: string;
  type: 'text' | 'button' | 'image' | 'form' | 'container';
  content: string;
  styles: Record<string, string>;
  position: { x: number; y: number };
  size: { width: number; height: number };
}

const Builder: React.FC = () => {
  const [elements, setElements] = useState<Element[]>([]);
  const [selectedElement, setSelectedElement] = useState<Element | null>(null);
  const [draggedElement, setDraggedElement] = useState<string | null>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  const blockTypes = [
    // Layout
    { type: 'header', icon: 'HeaderIcon', label: 'Header', color: 'bg-blue-500' },
    { type: 'navigation', icon: 'NavigationIcon', label: 'Navigation', color: 'bg-blue-500' },
    { type: 'footer', icon: 'FooterIcon', label: 'Footer', color: 'bg-blue-500' },
    { type: 'sidebar', icon: 'SidebarIcon', label: 'Sidebar', color: 'bg-blue-500' },
    { type: 'container', icon: Container, label: 'Container', color: 'bg-blue-500' },
    { type: 'column-layout', icon: 'ColumnLayoutIcon', label: 'Column Layout', color: 'bg-blue-500' },

    // Content
    { type: 'hero-section', icon: 'HeroIcon', label: 'Hero Section', color: 'bg-blue-500' },
    { type: 'text-block', icon: Type, label: 'Text Block', color: 'bg-blue-500' },
    { type: 'image', icon: Image, label: 'Image', color: 'bg-blue-500' },
    { type: 'video-player', icon: 'VideoIcon', label: 'Video Player', color: 'bg-blue-500' },
    { type: 'audio-player', icon: 'AudioIcon', label: 'Audio Player', color: 'bg-blue-500' },
    { type: 'image-gallery', icon: 'GalleryIcon', label: 'Image Gallery', color: 'bg-blue-500' },
    { type: 'testimonial', icon: 'TestimonialIcon', label: 'Testimonial', color: 'bg-blue-500' },
    { type: 'faq-section', icon: 'FAQIcon', label: 'FAQ Section', color: 'bg-blue-500' },

    // Interactive
    { type: 'button', icon: Square, label: 'Button', color: 'bg-blue-500' },
    { type: 'contact-form', icon: 'ContactFormIcon', label: 'Contact Form', color: 'bg-blue-500' },
    { type: 'card', icon: 'CardIcon', label: 'Card', color: 'bg-blue-500' },
    { type: 'modal-dialog', icon: 'ModalIcon', label: 'Modal Dialog', color: 'bg-blue-500' },
    { type: 'tab-container', icon: 'TabIcon', label: 'Tab Container', color: 'bg-blue-500' },
    { type: 'accordion', icon: Settings, label: 'Accordion', color: 'bg-blue-500' },
    { type: 'search-bar', icon: 'SearchIcon', label: 'Search Bar', color: 'bg-blue-500' },
    { type: 'star-rating', icon: 'StarIcon', label: 'Star Rating', color: 'bg-blue-500' },

    // E-Commerce
    { type: 'product-card', icon: 'ProductIcon', label: 'Product Card', color: 'bg-blue-500' },
    { type: 'shopping-cart', icon: 'CartIcon', label: 'Shopping Cart', color: 'bg-blue-500' },
    { type: 'pricing-table', icon: 'PricingIcon', label: 'Pricing Table', color: 'bg-blue-500' },
    { type: 'checkout-form', icon: 'CheckoutIcon', label: 'Checkout Form', color: 'bg-blue-500' },

    // Social
    { type: 'social-media', icon: 'SocialIcon', label: 'Social Media', color: 'bg-blue-500' },
    { type: 'comments', icon: 'CommentsIcon', label: 'Comments', color: 'bg-blue-500' },
    { type: 'like-button', icon: 'LikeIcon', label: 'Like Button', color: 'bg-blue-500' },
    { type: 'share-button', icon: 'ShareIcon', label: 'Share Button', color: 'bg-blue-500' },

    // Data
    { type: 'bar-chart', icon: 'BarChartIcon', label: 'Bar Chart', color: 'bg-blue-500' },
    { type: 'pie-chart', icon: 'PieChartIcon', label: 'Pie Chart', color: 'bg-blue-500' },
    { type: 'statistics', icon: 'StatisticsIcon', label: 'Statistics', color: 'bg-blue-500' },
    { type: 'progress-bar', icon: 'ProgressBarIcon', label: 'Progress Bar', color: 'bg-blue-500' },

    // Utility
    { type: 'calendar', icon: 'CalendarIcon', label: 'Calendar', color: 'bg-blue-500' },
    { type: 'map', icon: 'MapIcon', label: 'Map', color: 'bg-blue-500' },
    { type: 'contact-info', icon: 'ContactInfoIcon', label: 'Contact Info', color: 'bg-blue-500' },
    { type: 'newsletter', icon: 'NewsletterIcon', label: 'Newsletter', color: 'bg-blue-500' },
    { type: 'team-members', icon: 'TeamIcon', label: 'Team Members', color: 'bg-blue-500' },
    { type: 'countdown-timer', icon: 'CountdownIcon', label: 'Countdown Timer', color: 'bg-blue-500' },
    { type: 'breadcrumbs', icon: 'BreadcrumbsIcon', label: 'Breadcrumbs', color: 'bg-blue-500' },
  ];

  const handleDragStart = (e: React.DragEvent, type: string) => {
    setDraggedElement(type);
    e.dataTransfer.effectAllowed = 'copy';
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (!draggedElement || !canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newElement: Element = {
      id: Date.now().toString(),
      type: draggedElement as any,
      content: getDefaultContent(draggedElement),
      styles: getDefaultStyles(draggedElement),
      position: { x, y },
      size: { width: 200, height: 50 },
    };

    setElements([...elements, newElement]);
    setDraggedElement(null);
  };

  const getDefaultContent = (type: string) => {
    switch (type) {
      case 'text': return 'Your text here';
      case 'button': return 'Click me';
      case 'image': return 'https://via.placeholder.com/200x100';
      case 'form': return 'Form field';
      case 'container': return '';
      default: return '';
    }
  };

  const getDefaultStyles = (type: string) => {
    const baseStyles = {
      fontSize: '16px',
      color: '#000000',
      backgroundColor: type === 'button' ? '#3b82f6' : 'transparent',
      border: 'none',
      borderRadius: '4px',
      padding: '8px',
      margin: '0px',
    };
    return baseStyles;
  };

  const updateElement = (id: string, updates: Partial<Element>) => {
    setElements(elements.map(el =>
      el.id === id ? { ...el, ...updates } : el
    ));
  };

  const deleteElement = (id: string) => {
    setElements(elements.filter(el => el.id !== id));
    if (selectedElement?.id === id) {
      setSelectedElement(null);
    }
  };

  const renderElement = (element: Element) => {
    const style = {
      position: 'absolute' as const,
      left: element.position.x,
      top: element.position.y,
      width: element.size.width,
      height: element.size.height,
      ...element.styles,
      cursor: 'move',
    };

    const isSelected = selectedElement?.id === element.id;

    return (
      <div
        key={element.id}
        style={style}
        className={`border-2 ${isSelected ? 'border-blue-500' : 'border-transparent'} hover:border-blue-300 transition-colors`}
        onClick={() => setSelectedElement(element)}
      >
        {element.type === 'text' && (
          <div className="w-full h-full flex items-center justify-center">
            {element.content}
          </div>
        )}
        {element.type === 'button' && (
          <button
            className="w-full h-full rounded"
            style={{ backgroundColor: element.styles.backgroundColor }}
          >
            {element.content}
          </button>
        )}
        {element.type === 'image' && (
          <img
            src={element.content}
            alt="Element"
            className="w-full h-full object-cover rounded"
          />
        )}
        {element.type === 'form' && (
          <input
            type="text"
            placeholder={element.content}
            className="w-full h-full px-2 border rounded"
          />
        )}
        {element.type === 'container' && (
          <div className="w-full h-full border-2 border-dashed border-gray-300 rounded flex items-center justify-center">
            <span className="text-gray-500">Container</span>
          </div>
        )}

        {isSelected && (
          <div className="absolute -top-6 -right-6 flex gap-1">
            <Button size="sm" variant="outline" className="w-6 h-6 p-0">
              <Copy className="w-3 h-3" />
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="w-6 h-6 p-0 text-red-500 hover:text-red-700"
              onClick={(e) => {
                e.stopPropagation();
                deleteElement(element.id);
              }}
            >
              <Trash2 className="w-3 h-3" />
            </Button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-blue-50 via-blue-100 to-blue-150">
      {/* Top Navbar */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-blue-200/50 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-semibold text-blue-900">Code Guru</span>
          </div>
          <div className="h-6 w-px bg-blue-200"></div>
          <Input
            placeholder="Project name"
            defaultValue="My Awesome Project"
            className="w-48 bg-white/60 border-blue-200 focus:border-blue-400"
          />
        </div>

        <div className="flex items-center gap-3">
          <Button variant="outline" className="bg-white/60 border-blue-200 text-blue-700 hover:bg-blue-50">
            <Save className="w-4 h-4 mr-2" />
            Save
          </Button>
          <Button variant="outline" className="bg-white/60 border-blue-200 text-blue-700 hover:bg-blue-50">
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
          <Button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700">
            <Code className="w-4 h-4 mr-2" />
            Generate Code
          </Button>
        </div>
      </nav>

      <div className="flex-1 flex">
        {/* Left Sidebar - Components */}
        <div className="w-64 bg-white/70 backdrop-blur-sm border-r border-blue-200/50 p-4">
          <h3 className="text-sm font-semibold text-blue-900 mb-4 flex items-center gap-2">
            <Move className="w-4 h-4" />
            Components
          </h3>
          <div className="space-y-3">
            {blockTypes.map((block) => {
              const Icon = block.icon;
              return (
                <div
                  key={block.type}
                  draggable
                  onDragStart={(e) => handleDragStart(e, block.type)}
                  className={`${block.color} text-white p-3 rounded-lg cursor-move hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{block.label}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8">
            <h4 className="text-xs font-semibold text-blue-700 mb-2 uppercase tracking-wide">
              Quick Tips
            </h4>
            <div className="text-xs text-blue-600 space-y-1">
              <p>• Drag components to canvas</p>
              <p>• Click to select and edit</p>
              <p>• Use properties panel for styling</p>
            </div>
          </div>
        </div>

        {/* Canvas */}
        <div className="flex-1 relative">
          <div
            ref={canvasRef}
            className="w-full h-full bg-white/50 relative overflow-hidden"
            style={{
              backgroundImage: `
                linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px'
            }}
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
          >
            {elements.map(renderElement)}

            {elements.length === 0 && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                    <Move className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    Start Building
                  </h3>
                  <p className="text-blue-600">
                    Drag components from the left sidebar to begin
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Sidebar - Properties */}
        <div className="w-80 bg-white/70 backdrop-blur-sm border-l border-blue-200/50 p-6 overflow-y-auto">
          {selectedElement ? (
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Properties
                </h2>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                  {selectedElement.type.charAt(0).toUpperCase() + selectedElement.type.slice(1)}
                </Badge>
              </div>

              {/* Content */}
              <div>
                <label className="text-sm font-medium text-blue-900 mb-2 block">
                  Content
                </label>
                <Input
                  value={selectedElement.content}
                  onChange={(e) => updateElement(selectedElement.id, { content: e.target.value })}
                  className="bg-white/60 border-blue-200 focus:border-blue-400"
                />
              </div>

              {/* Position */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-blue-700 mb-1 block">X Position</label>
                  <Input
                    type="number"
                    value={selectedElement.position.x}
                    onChange={(e) => updateElement(selectedElement.id, {
                      position: { ...selectedElement.position, x: parseInt(e.target.value) || 0 }
                    })}
                    className="bg-white/60 border-blue-200 focus:border-blue-400"
                  />
                </div>
                <div>
                  <label className="text-xs text-blue-700 mb-1 block">Y Position</label>
                  <Input
                    type="number"
                    value={selectedElement.position.y}
                    onChange={(e) => updateElement(selectedElement.id, {
                      position: { ...selectedElement.position, y: parseInt(e.target.value) || 0 }
                    })}
                    className="bg-white/60 border-blue-200 focus:border-blue-400"
                  />
                </div>
              </div>

              {/* Size */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-blue-700 mb-1 block">Width</label>
                  <Input
                    type="number"
                    value={selectedElement.size.width}
                    onChange={(e) => updateElement(selectedElement.id, {
                      size: { ...selectedElement.size, width: parseInt(e.target.value) || 100 }
                    })}
                    className="bg-white/60 border-blue-200 focus:border-blue-400"
                  />
                </div>
                <div>
                  <label className="text-xs text-blue-700 mb-1 block">Height</label>
                  <Input
                    type="number"
                    value={selectedElement.size.height}
                    onChange={(e) => updateElement(selectedElement.id, {
                      size: { ...selectedElement.size, height: parseInt(e.target.value) || 50 }
                    })}
                    className="bg-white/60 border-blue-200 focus:border-blue-400"
                  />
                </div>
              </div>

              {/* Styles */}
              <div>
                <label className="text-sm font-medium text-blue-900 mb-2 block">
                  Background Color
                </label>
                <div className="flex gap-2">
                  <Input
                    type="color"
                    value={selectedElement.styles.backgroundColor || '#ffffff'}
                    onChange={(e) => updateElement(selectedElement.id, {
                      styles: { ...selectedElement.styles, backgroundColor: e.target.value }
                    })}
                    className="w-12 h-8 p-1 bg-white/60 border-blue-200"
                  />
                  <Input
                    value={selectedElement.styles.backgroundColor || '#ffffff'}
                    onChange={(e) => updateElement(selectedElement.id, {
                      styles: { ...selectedElement.styles, backgroundColor: e.target.value }
                    })}
                    className="flex-1 bg-white/60 border-blue-200 focus:border-blue-400"
                  />
                </div>
              </div>

              {selectedElement.type !== 'image' && (
                <div>
                  <label className="text-sm font-medium text-blue-900 mb-2 block">
                    Text Color
                  </label>
                  <div className="flex gap-2">
                    <Input
                      type="color"
                      value={selectedElement.styles.color || '#000000'}
                      onChange={(e) => updateElement(selectedElement.id, {
                        styles: { ...selectedElement.styles, color: e.target.value }
                      })}
                      className="w-12 h-8 p-1 bg-white/60 border-blue-200"
                    />
                    <Input
                      value={selectedElement.styles.color || '#000000'}
                      onChange={(e) => updateElement(selectedElement.id, {
                        styles: { ...selectedElement.styles, color: e.target.value }
                      })}
                      className="flex-1 bg-white/60 border-blue-200 focus:border-blue-400"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="text-sm font-medium text-blue-900 mb-2 block">
                  Font Size
                </label>
                <Input
                  value={selectedElement.styles.fontSize || '16px'}
                  onChange={(e) => updateElement(selectedElement.id, {
                    styles: { ...selectedElement.styles, fontSize: e.target.value }
                  })}
                  className="bg-white/60 border-blue-200 focus:border-blue-400"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-blue-900 mb-2 block">
                  Border Radius
                </label>
                <Input
                  value={selectedElement.styles.borderRadius || '4px'}
                  onChange={(e) => updateElement(selectedElement.id, {
                    styles: { ...selectedElement.styles, borderRadius: e.target.value }
                  })}
                  className="bg-white/60 border-blue-200 focus:border-blue-400"
                />
              </div>
            </div>
          ) : (
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <Settings className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Properties</h3>
              <p className="text-sm text-blue-600">
                Select an element on the canvas to edit its properties
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Builder;
